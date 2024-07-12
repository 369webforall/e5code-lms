import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HowToApply = () => {
  return (
    <div className="bg-pink-50 py-6" id="how-to-apply">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          How to Apply to Our Web Development Course
        </h1>
        <p className="font-semibold mb-2 text-xl">
          The course is available in two different formats
        </p>
        <ul className="list-disc mb-4 space-y-2 px-8">
          <li>
            Choose the format that best fits your preferred way of learning.
          </li>
          <li>Create an account by clicking the Register button.</li>
          <li>Watch our free videos.</li>
          <li>
            After making your final decision, you can proceed with the payment.
            Instructions will be available in your Dashboard.
          </li>
          <li>
            Update your profile and send an email with the attached payment
            slip. Please mention your Student ID in the subject.
          </li>
          <li>
            We will add you to our chat group where you will find all further
            instructions.
          </li>
          <li>Please read the FAQ.</li>
          <li>For any queries, you can write to us via email.</li>
          <li>
            In the introduction video, we will explain how to follow the course
            on a daily basis.
          </li>
        </ul>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="border-2 border-orange-500 p-4">
            <h2 className="text-xl font-semibold mb-2">Join for live class</h2>
            <p className="mb-2">
              Get full access to live classes and recorded video
            </p>
            <p className="mb-4">Price: R2500</p>
            <Button variant="destructive">
              <Link href={"/authenticate"}>Register</Link>
            </Button>
          </div>
          <div className="border-2 border-orange-500 p-4">
            <h2 className="text-xl font-semibold mb-2">
              Join for pre-recorded lectures
            </h2>
            <p>Access pre-recorded videos at your own pace.</p>
            <p className="mb-2">
              Video will be availabe after the class start.
            </p>
            <p className="mb-4">Price: R1500</p>
            <Button variant="destructive">
              <Link href={"/authenticate"}>Register</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToApply;
