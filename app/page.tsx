import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";
export default function page() {
  return (
    <main className="sm:mt-24 mt-28 ">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold sm:text-6xl md:text-8xl text-primary-50 mb-8 sm:mb-10 tracking-tight sm:font-normal">
          Discover the wild
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-6 py-4  sm:px-8 sm:py-6 text-primary-800 
          text-md sm:text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
