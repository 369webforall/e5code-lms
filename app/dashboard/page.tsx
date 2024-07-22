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
      <header className="border-b-2">
        <p>Student Name: {user.name}</p>
        <p className="text-xl font-semibold">Student Id: {user.studentId}</p>
      </header>
      <div className="my-2">
        <p>
          Notice: Please use your Student ID code when sending the payment slip
          to Velisa or any further email.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
