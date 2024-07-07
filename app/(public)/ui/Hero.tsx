import React from "react";
import { Button } from "../../../components/ui/button";
const Hero = () => {
  return (
    <div className="bg-gray-800 text-white py-24">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to our Online Coaching
        </h1>
        <p className="text-lg mb-8">Master MERN stack</p>

        <div className="max-w-2xl mx-auto bg-purple-600 p-4 my-4 flex flex-col gap-2 items-center justify-center">
          <h1 className="text-center  text-2xl">
            Velisa Afraica - New Session on MERN Stack
          </h1>
          <h2 className="text-center  text-xl">Form August 12, 2024</h2>
          <p>Visit Faq Page</p>
          <p>
            Note: use <b>Gmail</b> account to register
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
