import { getCabins } from "../_lib/data-service";
// import { unstable_noStore as noStore } from "next/cache";
import CabinCard from "./CabinCard";

async function CabinList() {
  // opt out = no caching
  // noStore(); // = revalidate = 0 but for the component
  const cabins = await getCabins();
  if (!cabins.length) return null;
  return (
    <div className="grid grid-cols-[repeat(1,minmax(290px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-8 lg:gap-12 xl:gap-14">
      {cabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
