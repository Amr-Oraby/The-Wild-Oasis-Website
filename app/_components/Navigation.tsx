import Link from "next/link";

export default function Navigation() {
  const linkStyle =
    "hover:text-accent-400 transition-colors text-base sm:text-lg";
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
          <Link href="/account" className={linkStyle}>
            Guest area
          </Link>
        </li>
      </ul>
    </nav>
  );
}
