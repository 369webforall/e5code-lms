import React from "react";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MoveDownIcon } from "lucide-react";
const Hero = () => {
  return (
    <>
      <div className="p-4 pt-36 bg-purple-50">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="container mx-auto text-center flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4 text-green-600">
              Welcome to our Online Coaching
            </h1>
            <p className="text-lg mb-8">Master MERN stack</p>

            <div className="max-w-2xl mx-auto p-4  flex flex-col gap-2 items-center justify-center">
              <h1 className="text-center text-2xl">
                New Session on MERN Stack
              </h1>
              <h2 className="text-center text-xl">From August 12, 2024</h2>
              <p>Visit the FAQ page for the most commonly asked questions.</p>
              <p>
                Note: use <b>Gmail</b> account to register
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
