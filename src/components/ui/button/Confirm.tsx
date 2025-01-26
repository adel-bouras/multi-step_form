"use client";
import { useStep } from "@/store";
import React from "react";

function Confirm() {
  const step = useStep((state) => state.step);
  const setStep = useStep((state) => state.setStep);

  return (
    <button
      onClick={() => {
        setStep(5);
      }}
      className={`
  ${step === 4 ? "block" : "hidden"}
  bg-Purplish_blue text-white
  xs:rounded-sm ds:rounded-lg select-none w-24 h-11 font-bold hover:bg-purple-400
  `}
    >
      Confirm
    </button>
  );
}

export default Confirm;
