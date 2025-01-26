import Image from "next/image";
import React from "react";
import image from "@/../public/icon-thank-you.svg";

function Thnks() {
  return (
    <div
      className=" xs:w-full xs:h-full ds:h-full  
    flex flex-col items-center justify-center gap-10
    "
    >
      <Image src={image} width={80} height={80} alt="checkbox" />
      <h1 className="text-Marine_blue font-extrabold ds:text-4xl xs:text-2xl ">
        Thank you!
      </h1>
      <p className="text-paragraph ds:w-[63%] text-Cool_gray text-center">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default Thnks;
