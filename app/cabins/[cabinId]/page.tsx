import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { cabinType } from "@/app/types/cabinType";

import { Suspense } from "react";

type PageProps = {
  params: Promise<{
    cabinId: string;
  }>;
};

// export const metadata = {
//   title: "Cabin",
// };

export async function generateMetadata({ params }: PageProps) {
  const { cabinId } = await params;
  const { name } = await getCabin(Number(cabinId));
  return {
    title: `Cabin ${name}`,
  };
}

// Then Next.js creates these pages during the build:
// from dynamic to static
export async function generateStaticParams() {
  const cabins = await getCabins();

  // return array of objects of ids
  const ids = cabins.map((cabin: cabinType) => ({
    cabinId: String(cabin.id),
  }));
  return ids;
}

export default async function Page({ params }: PageProps) {
  const { cabinId } = await params;
  const cabin = await getCabin(Number(cabinId));

  // const [cabin, bookedDates, settings] = await Promise.all([
  //   getCabin(Number(cabinId)),
  //   getBookedDatesByCabinId(Number(cabinId)),
  //   getSettings(),
  // ]);

  const { name, maxCapacity, image, description } = cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin
        name={name}
        maxCapacity={maxCapacity}
        image={image}
        description={description}
      />
      <div>
        <h2 className=" text-xl sm:text-2xl md:text-5xl font-semibold text-center text-accent-400">
          Reserve cabin {name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
