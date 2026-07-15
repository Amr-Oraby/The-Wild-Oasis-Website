import TextExpander from "@/app/_components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

type CabinProps = {
  name: string;
  description: string;
  maxCapacity: number;
  image: string;
};

function Cabin({ name, description, maxCapacity, image }: CabinProps) {
  return (
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
              For up to <span className="font-bold">{maxCapacity}</span> guests
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
  );
}

export default Cabin;
