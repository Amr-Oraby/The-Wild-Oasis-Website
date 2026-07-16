import NextAuth, { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    // run this code whenever the user clicks account route
    authorized({ auth }) {
      return !!auth?.user; // if false not authorized return to login page
    },
    async signIn({ user }) {
      // like a middleware
      // callback to signing in
      try {
        if (!user.email) return false;
        const existingGuest = await getGuest(user?.email);
        if (!existingGuest)
          await createGuest({
            email: user?.email || "",
            fullName: user?.name || "",
          });
        return true;
      } catch (err) {
        console.error(err);
        return false;
      }
    },
    async session({ session }) {
      // runs after signin and every sessoin getting
      const guest = await getGuest(session.user.email);
      session.user.id = guest.id; // add id to the user
      return session;
    },
  },
  pages: {
    signIn: "/login", // use this page to login not the default google btn
  },
} satisfies NextAuthConfig;

export const {
  auth, // returns session
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
