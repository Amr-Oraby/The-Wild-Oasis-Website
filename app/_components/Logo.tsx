import Link from "next/link";
import Image from "next/image";
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src="/logo.png"
        width={60}
        height={60}
        alt="The Wild Oasis logo"
        className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
      />
      <span className="text-md md:text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
