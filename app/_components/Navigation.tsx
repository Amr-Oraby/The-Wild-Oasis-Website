import Link from "next/link";
import { auth } from "../_lib/auth";
import Image from "next/image";

export default async function Navigation() {
  const session = await auth(); // made the route dynamic as this is cookies
  console.log(session);
  const linkStyle =
    "hover:text-accent-400 transition-colors text-base sm:text-lg flex gap-2 items-center";
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-4 sm:gap-16 items-center">
        <li>
          <Link href="/cabins" className={linkStyle}>
            Cabins
          </Link>
        </li>
        <li>
          <Link href="/about" className={linkStyle}>
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link href="/account" className={linkStyle}>
              <span>
                <Image
                  className="h-8 rounded-full"
                  width={32}
                  height={32}
                  src={session?.user?.image}
                  alt="user image"
                  referrerPolicy="no-referrer"
                />
              </span>
              <span>Guest area</span>
            </Link>
          ) : (
            <Link href="/account" className={linkStyle}>
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
