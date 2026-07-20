"use client";

import Image from "next/image";
import { cabinType } from "../types/cabinType";
import { useReservation } from "./ReservationContext";
import { differenceInDays } from "date-fns";
import { createReservation } from "../_lib/actions";
import SubmitButton from "./SubmitButton";

// import { useReservation } from "./ReservationContext";
type userType = {
  email?: string | null | undefined;
  image?: string | null | undefined;
  name?: string | null | undefined;
};
function ReservationForm({
  user,
  cabin,
}: {
  cabin: cabinType;
  user: userType;
}) {
  const { maxCapacity, regularPrice, discount, id: cabinId } = cabin;
  const { range, setRange } = useReservation();
  const startDate = range?.from;
  const endDate = range?.to;
  const numNights =
    range?.from && range?.to ? differenceInDays(range.to, range.from) : 0;
  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData = {
    startDate: startDate?.toISOString(),
    endDate: endDate?.toISOString(),
    numNights,
    cabinPrice,
    cabinId,
  };

  return (
    <div className="flex flex-col min-h-[400px]">
      <div className="bg-primary-800 text-primary-300 px-10 sm:px-14 py-2 flex justify-between items-center">
        <p>Logged in as</p>

        <div className="flex gap-4 items-center">
          <Image
            // Important to display google profile images
            referrerPolicy="no-referrer"
            className="h-8 rounded-full"
            src={user.image ?? "/default-user.jpg"}
            alt={user.name ?? "User"}
            width={32}
            height={32}
          />
          <p>{user?.name}</p>
        </div>
      </div>

      {range?.from && range?.to && (
        <p>
          {String(range?.from)} to {String(range?.to)}
        </p>
      )}

      <form
        action={async (formData) => {
          await createReservation(bookingData, formData);
          setRange({ from: undefined, to: undefined });
        }}
        className="bg-primary-900 py-10 pt-14 px-10 text-lg flex gap-10 flex-col h-full"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="px-5 py-1 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Additional notes..."
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          {!(startDate && endDate) ? (
            <p className="text-primary-300 text-base">
              Start by selecting dates
            </p>
          ) : (
            <SubmitButton pendingLabel="Reserving...">Reserve now</SubmitButton>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
