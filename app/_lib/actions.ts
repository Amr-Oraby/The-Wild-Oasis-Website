"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import {
  createBooking,
  deleteBooking,
  getBookings,
  updateBooking,
  updateGuest,
} from "./data-service";
import { redirect } from "next/navigation";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateProfile(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("You must be logged in");

  const nationalID = String(formData.get("nationalID") ?? "").trim();

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID)) {
    throw new Error("Please provide a valid national ID.");
  }

  const country = String(formData.get("nationality") ?? "");
  const [nationality, countryFlag] = country.split("%");

  const updatedFields = {
    nationalID,
    nationality,
    countryFlag,
  };
  await updateGuest(Number(session?.user?.id), updatedFields);

  // revalidating  the casch
  revalidatePath("/account/profile");
}

export async function deleteReservation(bookingId: number) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in first");

  // security
  if (!session?.user?.id) throw new Error("You must be logged in first");
  const guestBookings = await getBookings(Number(session?.user?.id));
  const guestBookingsIds = guestBookings.map((booking) => booking.id);
  if (!guestBookingsIds.includes(bookingId))
    throw new Error("You are not allowed to delete this booking");

  await deleteBooking(bookingId);
  revalidatePath("/account/reservations");
}

type BookingData = {
  startDate?: string;
  endDate?: string;
  numNights: number;
  cabinPrice: number;
  cabinId: number;
};

export async function createReservation(
  bookingData: BookingData,
  formData: FormData,
) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in first");

  const newBooking = {
    ...bookingData,
    guestId: Number(session?.user?.id),
    numGuests: Number(formData.get("numGuests")),
    observations: (formData.get("observations") as string | null)?.slice(
      0,
      1000,
    ),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };
  await createBooking(newBooking);
  // revalidatePath(`/cabins`);
  revalidatePath(`/cabins/${bookingData?.cabinId}`);
  redirect("/thankyou");
}

export async function editReservation(formData: FormData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in first");

  if (!session?.user?.id) throw new Error("You must be logged in first");
  const guestBookings = await getBookings(Number(session?.user?.id));
  const guestBookingsIds = guestBookings.map((booking) => booking.id);

  const bookingId = Number(formData.get("bookingId"));
  if (!guestBookingsIds.includes(bookingId))
    throw new Error("You are not allowed to edit this booking");

  const numGuests = formData.get("numGuests");
  const observations = formData.get("observations");
  const updatedFields = {
    numGuests,
    observations: observations?.slice(0, 1000),
  };
  await updateBooking(bookingId, updatedFields);
  revalidatePath(`/account/reservations`);
  revalidatePath(`/account/reservations/edit/${bookingId}`);
  redirect("/account/reservations");
}
