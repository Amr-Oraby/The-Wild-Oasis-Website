import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";

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
        className={`${josefin.className} relative bg-primary-950 text-primary-100 min-h-screen p-2 sm:p-5 flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-2 sm:px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full ">{children}</main>
        </div>
      </body>
    </html>
  );
}
