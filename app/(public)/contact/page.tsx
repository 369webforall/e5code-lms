import React from "react";

const ContactPage = () => {
  return (
    <div className="h-screen">
      <div className=" max-w-sm mx-auto p-6 border">
        <div className="flex flex-col gap-3">
          <h2 className="mb-4 text-2xl font-semibold text-green-600 border-b-2">
            Contact Details
          </h2>
          <p>3 Georgian Crescent West, Bryanston East</p>
          <p>info@velisaafrica.co.za</p>
          <a
            href="https://velisaafrica.co.za/"
            target="_blank"
            className="hover:text-purple-600 underline"
          >
            Velisa Africa
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
