"use client";
import Image from "next/image";
import { JSX } from "react";
import arcade from "@/../public/icon-arcade.svg";
import advanced from "@/../public/icon-advanced.svg";
import pro from "@/../public/icon-pro.svg";
import { useBill, usePlan, usePrice } from "@/store";
import type { Price } from "@/store";

interface Props {
  onclick: () => void;
  name: string;
  bill: number;
  type: "mo" | "yr";
  image: string;
  isSelected: boolean;
}

function Card(props: Props): JSX.Element {
  return (
    <div
      onClick={props.onclick}
      className={`ds:h-44 xs:h-20 ds:w-40 xs:w-full     hover:border-Purplish_blue ds:cursor-pointer xs:pl-5 flex ds:flex-col xs:flex-row ds:justify-between xs:justify-start ds:items-start xs:items-center ds:p-5 xs:p-0 xs:gap-5 rounded-md border-[1px] ${
        props.isSelected
          ? "border-Purplish_blue bg-Purplish_blue bg-opacity-10"
          : "border-Cool_gray"
      }`}
    >
      <Image
        src={props.image}
        alt={`${props.name} icon`}
        width={40}
        height={40}
      />
      <div>
        <h1 className="text-Marine_blue ds:text-xl xs:text-lg ds:font-bold xs:font-semibold">
          {props.name}
        </h1>
        <h2 className="text-Cool_gray text-sm">
          ${props.bill + "/" + props.type}
        </h2>
        {props.type === "mo" ? (
          false
        ) : (
          <h3 className="text-Marine_blue text-sm">2 mounths free</h3>
        )}
      </div>
    </div>
  );
}

interface Togg {
  type: "mo" | "yr";
  switch: (value: "mo" | "yr") => void;
  setprice: Price;
}

function Toggle(props: Togg) {
  const handleclick = () => {
    props.setprice.setPrice(
      props.setprice.price % 10 !== 0
        ? props.setprice.price * 10
        : props.setprice.price / 10
    );
    props.switch(props.type === "mo" ? "yr" : "mo");
  };
  return (
    <div className="rounded-sm ds:w-full ds:h-10 xs:h-10 xs:w-full flex items-center justify-center ds:text-xl xs:text-sm font-bold bg-Magnolia gap-10">
      <h1
        className={`${
          props.type === "mo" ? "text-Marine_blue" : "text-Cool_gray"
        }`}
      >
        Monthly
      </h1>
      <div
        onClick={handleclick}
        className="flex p-2 self-center items-center cursor-pointer bg-Marine_blue rounded-2xl h-7 w-14"
      >
        <div
          id="toggleround"
          className={`w-4 h-4 rounded-full bg-white transition-all transform ${
            props.type === "mo" ? "" : "translate-x-6"
          } hover:scale-[140%]`}
        ></div>
      </div>
      <h1
        className={`${
          props.type === "yr" ? "text-Marine_blue" : "text-Cool_gray"
        }`}
      >
        Yearly
      </h1>
    </div>
  );
}

function Step2() {
  const usebill = useBill();
  const useplan = usePlan();
  const useprice = usePrice();
  console.log(useprice.price);

  return (
    <div className="flex flex-col ds:gap-20 xs:gap-8  xs:w-[80%] h-[100%] w-full justify-center">
      <div>
        <h1 className="xs:text-2xl ds:text-3xl text-Marine_blue xs:font-extrabold">
          Select your plan
        </h1>
        <h1 className="text-paragraph text-Cool_gray">
          You have the option of mounthly or yearly billing
        </h1>
      </div>

      <div className="flex ds:flex-row xs:flex-col ds:gap-7 xs:gap-4 items-center justify-start w-full">
        <Card
          onclick={() => {
            useprice.setPrice(usebill.billType === "mo" ? 9 : 90);
            useplan.setPlan("Arcade");
          }}
          bill={usebill.billType === "mo" ? 9 : 90}
          image={arcade}
          isSelected={useplan.plan === "Arcade"}
          name="Arcade"
          type={usebill.billType}
        />
        <Card
          onclick={() => {
            useprice.setPrice(usebill.billType === "mo" ? 12 : 120);
            useplan.setPlan("Advanced");
          }}
          bill={usebill.billType === "mo" ? 12 : 120}
          image={advanced}
          isSelected={useplan.plan === "Advanced"}
          name="Advanced"
          type={usebill.billType}
        />
        <Card
          onclick={() => {
            useprice.setPrice(usebill.billType === "mo" ? 15 : 150);
            useplan.setPlan("Pro");
          }}
          bill={usebill.billType === "mo" ? 15 : 150}
          image={pro}
          isSelected={useplan.plan === "Pro"}
          name="Pro"
          type={usebill.billType}
        />
      </div>
      <Toggle
        type={usebill.billType}
        setprice={useprice}
        switch={usebill.setBill}
      />
    </div>
  );
}

export default Step2;
