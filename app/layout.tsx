import "@/app/_styles/globals.css";
import Navigation from "./_components/Navigation";
import Logo from "./_components/Logo";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome The Wild Oasis",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen p-5`}
      >
        <Logo />
        {children}
        <Navigation />
      </body>
    </html>
  );
}
