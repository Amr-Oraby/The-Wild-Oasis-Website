import Link from "next/link";

export const metadata = {
  title: "Account",
};
function page({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Welcome, Amr</h1>
      <div className="space-x-3 bg-blue-600 w-fit">
        <Link href="account/reservations">reservations</Link>
        <Link href="account/profile">profile</Link>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default page;
