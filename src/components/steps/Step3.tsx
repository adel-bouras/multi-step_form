"use client";
import React from "react";
import Image from "next/image";
import image from "@/../public/icon-checkmark.svg";
import { useBill, useServices } from "@/store";

interface Props {
  isCheck: boolean;
  head: string;
  parag: string;
  price: number;
  onclick: (v: string) => void;
}

function Check(props: Props) {
  const usebill = useBill();
  return (
    <div
      onClick={() => props.onclick(props.head[0].toLowerCase())}
      className={`select-none rounded-lg xs:h-16 ds:h-20 w-full flex items-center justify-start gap-4 xs:p-5 ds:p-10 border-[1px] ${
        props.isCheck
          ? "bg-Purplish_blue bg-opacity-5 border-Purplish_blue"
          : "bg-white border-Cool_gray"
      }`}
    >
      <div
        className={`flex  items-center justify-center ${
          props.isCheck
            ? "bg-Purplish_blue"
            : "bg-white border-[1px] border-Cool_gray "
        } w-[20px] h-[20px] rounded-sm`}
      >
        <Image src={image} alt="check" width={12} height={12} />
      </div>
      <div className="flex items-center justify-between w-full">
        <div>
          <h1 className="text-Marine_blue font-extrabold">{props.head}</h1>
          <p className="text-Cool_gray text-xs">{props.parag}</p>
        </div>
        <h2 className="text-Purplish_blue">
          +${usebill.billType === "mo" ? props.price : props.price * 10}/
          {usebill.billType}
        </h2>
      </div>
    </div>
  );
}

function Step3() {
  //o , l , c
  const service = useServices();
  const handleclick = (v: string) => {
    if (service.services.includes(v)) {
      service.removeService(v);
    } else {
      service.setService(v);
    }
  };
  return (
    <div className="ds:w-[80%] xs:w-full flex flex-col">
      <h1 className="ds:text-4xl xs:text-3xl font-extrabold  text-Marine_blue">
        Pick add-ons
      </h1>
      <p className="text-paragraph text-Cool_gray">
        Add-ons help enhence your gaming experience
      </p>{" "}
      <br />
      <br />
      <div className="flex flex-col items-center justify-start gap-5">
        <Check
          onclick={handleclick}
          isCheck={service.services.includes("o")}
          head="Online service"
          parag="Access to multiplayer games"
          price={1}
        />

        <Check
          onclick={handleclick}
          isCheck={service.services.includes("l")}
          head="Larger storage"
          parag="Extra 1TB cloud save"
          price={2}
        />

        <Check
          onclick={handleclick}
          isCheck={service.services.includes("c")}
          head="Customizable profile"
          parag="Custom theme on your profile"
          price={2}
        />
      </div>
    </div>
  );
}

export default Step3;
