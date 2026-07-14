import TextExpander from "@/app/_components/TextExpander";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { cabinType } from "@/app/types/cabinType";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

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
  const { name, maxCapacity, image, description } = cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="text-center lg:text-left grid grid-cols-[4fr] lg:grid-cols-[4fr_4fr] gap-3 lg:gap-20 border border-primary-800 px-3 py-2 sm:py-3 sm:px-10 mb-10">
        <div className="mx-auto relative w-[260px] h-[180px]  md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[450px]   lg:-translate-y-2">
          <Image
            fill
            className="object-cover"
            src={image}
            alt={`Cabin ${name}`}
          />
        </div>

        <div>
          <h3 className=" text-accent-100 font-black text-3xl sm:text-5xl md:text-7xl mb-5 lg:translate-x-[-254px] bg-primary-950 p-3 lg:p-6 pb-1 lg:w-[150%]">
            Cabin {name}
          </h3>

          <p className="text-base text-primary-300 mb-4">
            <TextExpander>{description}</TextExpander>
          </p>

          <ul className="flex flex-col gap-4 mb-7 items-center  lg:items-start">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-base sm:text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center ">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-sm sm:text-lg">
                Nestled in <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-sm sm:text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className=" text-xl sm:text-2xl md:text-5xl font-semibold text-center">
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}
