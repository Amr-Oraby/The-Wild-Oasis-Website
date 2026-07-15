import { auth } from "../_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import { cabinType } from "../types/cabinType";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabin }: { cabin: cabinType }) {
  const session = await auth();
  const [bookedDates, settings] = await Promise.all([
    getBookedDatesByCabinId(Number(cabin.id)),
    getSettings(),
  ]);
  return (
    <div className="mt-10 flex-col lg:flex-row flex border border-primary-800 min-h-[400px]">
      <DateSelector
        cabin={cabin}
        settings={settings}
        bookedDates={bookedDates}
      />
      {session?.user ? (
        <ReservationForm user={session?.user} cabin={cabin} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
