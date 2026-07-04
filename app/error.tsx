"use client";
type ErrorProps = {
  error: Error & { digest?: string }; // normal errors and server errors
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="mt-20 flex justify-center items-center flex-col gap-6">
      <h1 className="text-2xl sm:text-3xl font-semibold">
        Something went wrong!
      </h1>
      <p className="text-sm sm:text-lg">{error.message}</p>

      <button
        onClick={reset}
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-sm sm:text-lg"
      >
        Try again
      </button>
    </main>
  );
}
