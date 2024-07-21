import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HowToApply = () => {
  return (
    <div className="bg-pink-50 p-4" id="how-to-apply">
      <h1 className="h1-bold mb-4 text-green-600">
        How to Apply for Our MERN stack Web Development Course.
      </h1>
      <p className="font-semibold mb-2 text-xl">
        The course is available in two different formats
      </p>
      <ul className="list-disc mb-4 space-y-2 px-8">
        <li>
          Choose the format that best fits your preferred way of learning.
        </li>
        <li>Create an account by clicking the New Account button.</li>
        <li>
          Watch our{" "}
          <Link
            href="/demo"
            className="hover:text-red-600 font-semibold border-b-2 border-green-600"
          >
            Free videos.
          </Link>{" "}
        </li>
        <li>
          After making your final decision about which format you choose, you
          can proceed with the payment.You must be logged in to access your
          Dashboard, Click on Bank Details, Instructions will be available in
          your{" "}
          <Link
            href="/dashboard"
            className=" border-b-2 hover:border-b-2 hover:text-red-600"
          >
            Dashboard
          </Link>
          .
        </li>
        <li>
          When making a payment at your bank by EFT, you must use your student
          ID as the unique reference number, which you will find in your
          Dashboard.
        </li>
        <li>
          Send an email with the attached payment slip. Please mention your
          Student ID in the subject line, which is available in your Dashboard.
        </li>
        <li>
          Update your profile. This information will be used for generating your
          course completion certificate.
        </li>

        <li>
          We will add you to our chat group where you will find all further
          instructions.{" "}
          <a
            href="https://discord.com/"
            className="border-b-2 hover:text-red-600"
            target="_blank"
          >
            Discord for download
          </a>
        </li>
        <li>
          Please read the{" "}
          <Button
            variant="link"
            size="sm"
            className="text-red-600 font-semibold text-lg"
          >
            <Link href="/faq">FAQ</Link>
          </Button>
          page.
        </li>
        <li>
          For any queries, you can write to us via email at
          <b> info@velisaafrica.co.za</b>
        </li>
        <li>
          In the introduction video, we will explain how to follow the course.{" "}
          <Link
            href="/videos"
            className="hover:text-red-600 font-semibold border-b-2 border-green-600"
          >
            Introduction video.
          </Link>{" "}
        </li>
        <li>
          Note: During the class, students microphones will be muted. For any
          questions, students can ask in the Discord chat. During the next
          session, we will answer the asked questions, or we might upload a
          video with the explanation.
        </li>
      </ul>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="border-2 border-orange-500 p-4">
          <h2 className="h2-bold mb-2 border-b-2 border-green-600">
            Join for live classes
          </h2>
          <p className="mb-2">
            Get full access to live classes and recorded video
          </p>
          <p className="mb-2">Video will be available after each class</p>
          <p className="mb-2">Price: R2500.00 + 15% VAT (Total: R2875.00)</p>
          <p className="mb-4">Course Duration: 9 Months</p>
          <Button variant="link">
            <Link href={"/authenticate"} className="hover:text-red-600">
              Login or New Account
            </Link>
          </Button>
        </div>
        <div className="border-2 border-orange-500 p-4">
          <h2 className="h2-bold mb-2  border-b-2 border-green-600">
            Join for pre-recorded classes
          </h2>
          <p className="mb-2">Access pre-recorded classes at your own pace.</p>
          <p className="mb-2">Video will be available after each class</p>

          <p className="mb-2">Price: R1500.00 + 15% VAT (Total: R1725.00)</p>
          <p className="mb-4">Course Duration: 9 months</p>
          <Button variant="link">
            <Link href={"/authenticate"} className="hover:text-red-600">
              Login or New Account
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HowToApply;
