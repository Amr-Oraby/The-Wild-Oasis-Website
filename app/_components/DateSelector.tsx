"use client";

import { isWithinInterval } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { settingsType } from "../types/settingsType";
import { cabinType } from "../types/cabinType";
import { useReservation } from "./ReservationContext";
import { differenceInDays, isPast, isSameDay } from "date-fns";

function isAlreadyBooked(range: DateRange | undefined, datesArr: Date[]) {
  const { from, to } = range ?? {};

  if (!from || !to) return false;

  return datesArr.some((date) =>
    isWithinInterval(date, {
      start: from,
      end: to,
    }),
  );
}

function DateSelector({
  settings,
  bookedDates,
  cabin,
}: {
  settings: settingsType;
  bookedDates: Date[];
  cabin: cabinType;
}) {
  const { range, setRange } = useReservation();
  const displayRange = isAlreadyBooked(range, bookedDates)
    ? { from: undefined, to: undefined }
    : range;
  const { discount, regularPrice } = cabin;
  const numNights =
    displayRange?.from && displayRange?.to
      ? differenceInDays(displayRange.to, displayRange.from)
      : 0;
  const cabinPrice = numNights * (regularPrice - discount);

  // SETTINGS
  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="flex flex-col justify-between gap-3">
      <DayPicker
        className="pt-12 place-self-center"
        mode="range"
        selected={displayRange}
        onSelect={setRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        startMonth={new Date()}
        endMonth={new Date(new Date().getFullYear() + 5, 11)}
        captionLayout="dropdown"
        numberOfMonths={2}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
      />

      <div className="flex gap-1 items-center justify-between px-3 sm:px-8 bg-accent-500 text-primary-800 h-[72px]">
        <div className="flex items-center gap-2 sm:gap-6">
          <p className="flex gap-2 items-center">
            {discount > 0 ? (
              <>
                <span className="text-base sm:text-2xl">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-base sm:text-2xl">${regularPrice}</span>
            )}
            <span className="text-sm sm:text-base">/night</span>
          </p>
          {numNights ? (
            <div className=" flex items-center gap-1 sm:gap-3">
              <p className="flex gap-1 items-center bg-accent-600 px-2 py-1 sm:px-3  sm:py-2 text-base  sm:text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p className="flex items-center gap-1 sm:gap-3">
                <span className="text-sm sm:text-base font-bold uppercase">
                  Total
                </span>{" "}
                <span className="text-sm sm:text-xl font-semibold">
                  ${cabinPrice}
                </span>
              </p>
            </div>
          ) : null}
        </div>

        {displayRange?.from || displayRange?.to ? (
          <button
            className=" border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={() => setRange(undefined)}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
