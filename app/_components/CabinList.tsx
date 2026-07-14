import { getCabins } from "../_lib/data-service";
// import { unstable_noStore as noStore } from "next/cache";
import CabinCard from "./CabinCard";

async function CabinList({ filter }: { filter: string }) {
  // opt out = no caching
  // noStore(); // = revalidate = 0 but for the component
  const cabins = await getCabins();
  if (!cabins.length) return null;

  let displayedCabins;
  if (filter == "small") {
    displayedCabins = cabins?.filter((cabin) => cabin.maxCapacity <= 3);
  } else if (filter == "medium") {
    displayedCabins = cabins?.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7,
    );
  } else if (filter == "all") {
    displayedCabins = cabins;
  } else {
    displayedCabins = cabins?.filter((cabin) => cabin.maxCapacity >= 8);
  }
  return (
    <div className="grid grid-cols-[repeat(1,minmax(290px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
