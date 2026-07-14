"use client";

// import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

function Filter() {
  // all these hooks to set the searchParams
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [activeBtn, setActiveBtn] = useState("");

  function handleFilter(filter: string) {
    // setCapacity searchParams
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="text-sm sm:text-base w-fit ml-auto mb-8 border border-primary-800 flex">
      <button
        className={`${activeBtn == "all" || activeBtn == "" ? "bg-primary-700" : ""} px-3 py-1 sm:px-5 sm:py-2 hover:bg-primary-700`}
        onClick={() => {
          handleFilter("all");
          setActiveBtn("all");
        }}
      >
        All Cabins
      </button>
      <button
        className={`${activeBtn == "small" ? "bg-primary-700" : ""} px-3 py-1 sm:px-5 sm:py-2 hover:bg-primary-700`}
        onClick={() => {
          handleFilter("small");
          setActiveBtn("small");
        }}
      >
        1&mdash;3 guests
      </button>
      <button
        className={`${activeBtn == "medium" ? "bg-primary-700" : ""} px-3 py-1 sm:px-5 sm:py-2 hover:bg-primary-700`}
        onClick={() => {
          handleFilter("medium");
          setActiveBtn("medium");
        }}
      >
        4&mdash;7 guests
      </button>
      <button
        className={`${activeBtn == "large" ? "bg-primary-700" : ""} px-3 py-1 sm:px-5 sm:py-2 hover:bg-primary-700`}
        onClick={() => {
          handleFilter("large");
          setActiveBtn("large");
        }}
      >
        8&mdash;12 guests
      </button>
    </div>
  );
}

export default Filter;
