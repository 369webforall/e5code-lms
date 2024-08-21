import React from "react";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MoveDownIcon } from "lucide-react";
const Hero = () => {
  return (
    <>
      <div className="p-4 bg-purple-50 rounded-sm">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="text-center flex flex-col justify-center">
            <h1 className="h1-bold mb-4 text-green-600">
              Welcome to our Online Coaching
            </h1>
            <p className="text-2xl mb-2 font-semibold">Master MERN stack</p>

            <div className="max-w-2xl mx-auto p-4  flex flex-col gap-2 items-center justify-center">
              <h1 className="text-center text-xl">New Session on MERN Stack</h1>
              <h2 className="text-center text-xl">Starting soon</h2>
              <p>
                Visit the{" "}
                <Link href="/faq">
                  <Button
                    variant="link"
                    size="sm"
                    className="text-red-600 font-semibold text-lg"
                  >
                    FAQ
                  </Button>
                </Link>{" "}
                page for the most commonly asked questions.
              </p>
              <p className="text-lg font-semibold text-green-600">
                Note: You must use your <b className="text-green-600">Gmail</b>{" "}
                account to register
              </p>
              <Link href="#how-to-apply">
                <Button
                  className="mt-4 text-purple-600 font-bold text-xl"
                  variant="link"
                >
                  <MoveDownIcon /> How to Apply
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative w-full h-96">
            <Image
              src="/hero_mern.png"
              layout="fill"
              objectFit="cover"
              alt="MERN stack hero image"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
