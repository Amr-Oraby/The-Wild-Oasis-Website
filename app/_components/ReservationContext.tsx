"use client";

import { createContext, useContext, useState } from "react";
import { DateRange } from "react-day-picker";

type ReservationContextType = {
  range?: DateRange;
  setRange: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
};
const ReservationContext = createContext<ReservationContextType | undefined>(
  undefined,
);
function ReservationProvider({ children }: { children: React.ReactNode }) {
  const [range, setRange] = useState<DateRange | undefined>(undefined);
  return (
    <ReservationContext.Provider value={{ range, setRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const context = useContext(ReservationContext);
  if (context == undefined)
    throw new Error("Context was used outside it's range");
  return context;
}

export default ReservationProvider;
