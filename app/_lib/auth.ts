import NextAuth, { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

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
