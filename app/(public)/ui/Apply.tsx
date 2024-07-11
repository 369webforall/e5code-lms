import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const HowToApply = () => {
  return (
    <div className="bg-pink-100  py-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          How to apply to our Web Development course
        </h1>
        <p className="font-semibold mb-2">
          We have divided our bootcamp in two part
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="broder border-2 border-orange-500 p-2">
            <h2>Join for live class</h2>
            <Button variant="destructive" className="mt-4">
              <Link href={"/authenticate"}>Register</Link>
            </Button>
          </div>
          <div className="broder border-2 border-orange-500 p-2">
            <h2>Join for pre-recorded lectures</h2>
            <Button variant="destructive" className="mt-4">
              <Link href={"/authenticate"}>Register</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToApply;
