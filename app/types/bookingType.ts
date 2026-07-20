export type bookingType = {
  id?: number;
  created_at?: string;
  startDate?: string;
  endDate?: string;
  numNights: number;
  numGuests: number;
  totalPrice: number;
  guestId?: number;
  cabinId: number;

  cabinPrice?: number;
  extrasPrice?: number;
  status?: string;
  isPaid?: boolean;
  hasBreakfast?: boolean;
  observations?: string;

  cabins?: {
    name: string;
    image: string;
  }[];
};
