import React from "react";
import { getUser } from "@/lib/lucia";
import { redirect } from "next/navigation";
const BankDetailsPage = async () => {
  const user = await getUser();
  if (!user) {
    redirect("/");
  }
  return (
    <div>
      <h1 className="h1-bold mt-2 mb-2 border-b">
        Student Id: {user.studentId}
      </h1>
      <p className="mb-2">
        - Please use your Student ID as the reference number when making the
        payment.
      </p>
      <p>
        - Once the payment is completed, you can send an email with the attached
        payment slip. Email:{" "}
        <span className="font-bold">info@velisaafrica.co.za</span>
      </p>

      <h2 className="h2-bold mb-2 mt-4 border-b">
        Here is the Bank Details for EFT
      </h2>

      <p>Bank Name: Standard Bank</p>
      <p>Account Holder Name: John Doe</p>
      <p>Account Number: 123456789</p>
      <p>Branch Code: 051001</p>
    </div>
  );
};

export default BankDetailsPage;
