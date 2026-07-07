export type bookingType = {
  id: number;
  created_at: string;
  startDate: string | null;
  endDate: string | null;
  numNights: number | null;
  numGuests: number | null;
  cabinPrice: number | null;
  extrasPrice: number | null;
  status: string | null;
  isPaid: boolean | null;
  hasBreakfast: boolean | null;
  observations: string | null;
  totalPrice: number | null;
  cabinId: number | null;
  guestId: number | null;
};
