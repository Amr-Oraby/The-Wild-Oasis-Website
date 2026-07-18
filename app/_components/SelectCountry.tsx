import { getCountries } from "@/app/_lib/data-service";

// Let's imagine your colleague already built this component 😃

type SelectCountryProps = {
  defaultCountry: string;
  name: string;
  id: string;
  className: string;
};

async function SelectCountry({
  defaultCountry,
  name,
  id,
  className,
}: SelectCountryProps) {
  const countries = await getCountries();
  console.log(defaultCountry);
  const flag =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    countries?.find((country: any) => country.names.common === defaultCountry)
      ?.flag.url_svg ?? "";

  return (
    <select
      name={name}
      id={id}
      key={`${defaultCountry}%${flag}`}
      // Here we use a trick to encode BOTH the country name and the flag into the value. Then we split them up again later in the server action
      defaultValue={`${defaultCountry}%${flag}`}
      className={className}
    >
      <option value="" key={0}>
        Select country...
      </option>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {countries.map((c: any) => (
        <option
          key={c.names.common}
          value={`${c.names.common}%${c.flag.url_svg}`}
        >
          {c.names.common}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
