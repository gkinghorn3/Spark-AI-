import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <>
      <p>Dashbaord page</p>
      <UserButton afterSignOutUrl="/"/>
    </>
  );
}
