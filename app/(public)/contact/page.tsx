import React from "react";

const ContactPage = () => {
  return (
    <div className="max-w-sm mx-auto p-2 border">
      <div className="flex flex-col gap-3">
        <h2 className="h2-bold mb-4 text-green-600 border-b-2">
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
  );
};

export default ContactPage;
