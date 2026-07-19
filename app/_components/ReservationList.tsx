"use client";
import { useOptimistic } from "react";
import { bookingType } from "../types/bookingType";
import ReservationCard from "./ReservationCard";
import { deleteReservation } from "../_lib/actions";

function ReservationList({ bookings }: { bookings: bookingType[] }) {
  const [optBookings, optDelete] = useOptimistic(
    bookings,
    (currBookings: bookingType[], bookingId: number) => {
      return currBookings.filter((booking) => booking.id != bookingId);
    },
  );

  async function handleDelete(bookingId: number) {
    optDelete(bookingId);
    await deleteReservation(bookingId);
  }
  return (
    <ul className="space-y-6">
      {optBookings.map((booking: bookingType) => (
        <ReservationCard
          onDelete={handleDelete}
          booking={booking}
          key={booking.id}
        />
      ))}
    </ul>
  );
}

export default ReservationList;
