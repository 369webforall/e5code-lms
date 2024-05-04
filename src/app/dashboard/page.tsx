import getSession from "@/lib/getSession";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Student Dashboard",
};

const Dashboard = async () => {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/dashboard");
  }
  return (
   <div>This is dashboard main content</div>
  )
}

export default Dashboard





