"use client";
import { useStep } from "@/store";
import React from "react";

function Goback() {
  const step = useStep((state) => state.step);
  const setStep = useStep((state) => state.setStep);
  return (
    <button
      onClick={() => {
        setStep(step - 1);
      }}
      className={`
        ${step === 1 || step > 4 ? "invisible" : "block"}
        font-bold hover:text-Marine_blue
        text-Cool_gray bg-transparent border-none shadow-none select-none
  `}
    >
      Go Back
    </button>
  );
}

export default Goback;
