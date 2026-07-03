// import ReservationCard from "./ReservationCard";

export const metadata = {
  title: "Reservations",
};

export default function Page() {
  // CHANGE
  const bookings: any = [];

  return (
    <div>
      <h2 className="font-semibold text-xl sm:text-2xl text-accent-400 mb-7">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="text-sm sm:text-lg">
          You have no reservations yet. Check out our{" "}
          <a className="underline text-accent-500" href="/cabins">
            luxury cabins &rarr;
          </a>
        </p>
      ) : (
        <ul className="space-y-6">
          {bookings.map((booking: any) => (
            <p key={booking.id}>reservation card</p>
            // <ReservationCard booking={booking} key={booking.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
