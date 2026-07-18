"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { updateGuest } from "./data-service";

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
