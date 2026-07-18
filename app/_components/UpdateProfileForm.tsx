"use client";
import Image from "next/image";
import { guestType } from "../types/guestType";
import { updateProfile } from "../_lib/actions";

export function UpdateProfileForm({
  children,
  guest,
}: {
  children: React.ReactNode;
  guest: guestType;
}) {
  // CHANGE
  if (!guest) return null;
  const { countryFlag, email, fullName, nationalID } = guest;

  return (
    <form
      action={updateProfile}
      className="bg-primary-900 py-3 px-4 sm:py-8 sm:px-12 text-lg flex gap-6 flex-col"
    >
      <div className="space-y-2">
        <label className="text-sm sm:text-base">Full name</label>
        <input
          defaultValue={fullName}
          disabled
          name="fullName"
          className="px-1 py-0 sm:px-5 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm sm:text-base">Email address</label>
        <input
          defaultValue={email}
          name="email"
          disabled
          className="px-1 py-0 sm:px-5 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality" className="text-sm sm:text-base">
            Where are you from?
          </label>
          {countryFlag && (
            <Image
              src={countryFlag}
              width={30}
              height={30}
              alt="Country flag"
              className="h-5 rounded-sm"
            />
          )}
        </div>

        {/* // server component  */}
        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID" className="text-sm sm:text-base">
          National ID number
        </label>
        <input
          defaultValue={nationalID}
          name="nationalID"
          className="px-1 py-0 sm:px-5 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <button className="text-xs sm:text-base bg-accent-500 px-2 py-1 sm:px-8 sm:py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
          Update profile
        </button>
      </div>
    </form>
  );
}
