import React from "react";
import Image from "next/image";
const Logo = () => {
  return (
    <div>
      <a
        href="https://velisaafrica.co.za/academy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/logo.png"
          width={200}
          height={50}
          alt="Velisa Africa Academy Logo"
          priority
        />
      </a>
    </div>
  );
};

export default Logo;
