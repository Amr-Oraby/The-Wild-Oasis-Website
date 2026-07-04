function NotFound() {
  return (
    <main className="text-center space-y-6 mt-14">
      <h1 className="text-xl sm:text-3xl font-semibold">
        This page could not be found :(
      </h1>
      <a
        href="/"
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3  text-base sm:text-lg"
      >
        Go back home
      </a>
    </main>
  );
}

export default NotFound;
