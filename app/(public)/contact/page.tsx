import React from "react";
import { Button } from "@/components/ui/button";
const ContactPage = () => {
  return (
    <div className="mt-4 max-w-sm mx-auto p-6 border">
      <div className="flex flex-col gap-3">
        <h2 className="mb-4 text-xl font-semibold">Contact Details</h2>
        <p>3 Georgian Crescent West, Bryanston East</p>
        <p>info@velisaafrica.co.za</p>
        <a
          href="https://velisaafrica.co.za/"
          target="_black"
          className="hover:text-purple-600 underline"
        >
          Velisa Africa
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
