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
        <ul className="ml-4 space-y-2">
          <li className="list-disc">
            Note: Now click on bank details in your side bar, go to your bank,
            and make the EFT payment.
          </li>
          <li className="list-disc">
            Once the payment is done, you can send an email with your payment
            slip to Velisa.
          </li>
          <li className="list-disc">
            After sending the email, you can fill out the profile form. In case
            you don&#39;t have a GitHub or LinkedIn account, please create one.
          </li>
          <li className="list-disc">
            You can easily update your profile by clicking the profile link
            again, if you need to make any changes.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
