import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getUser } from "@/lib/lucia";
export const metadata: Metadata = {
  title: "Student Dashboard",
};

const Dashboard = async () => {
  //protected route
  const user = await getUser();
  if (!user) {
    redirect("/");
  }
  return (
    <div>
      Your are logged in as {user.name} and email {user.email}
    </div>
  );
};

export default Dashboard;
