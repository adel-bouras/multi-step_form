"use client";
import React from "react";
import Sidebar from "../sidebar/Sidebar";
/////
import Step1 from "@/components/steps/Step1";
import Step2 from "@/components/steps/Step2";
import Step3 from "@/components/steps/Step3";
import Step4 from "@/components/steps/Step4";
import Thnks from "@/components/steps/Thnks";
/////
import Confirm from "@/components/ui/button/Confirm";
import Goback from "@/components/ui/button/Goback";
import Nextstep from "@/components/ui/button/Nextstep";
import { useStep } from "@/store";

function Card() {
  const step = useStep((state) => state.step);
  return (
    <div className="xs:w-[90%] xs:min-h-[55%] ds:w-[60%]  shadow-xl rounded-xl flex items-center xs:justify-center xs:z-10 bg-white xs:mt-[100px] ds:m-0 ds:justify-between p-5">
      <div className="ds:flex xs:hidden">
        <Sidebar />
      </div>

      <div className="ds:w-[70%] h-full flex flex-col justify-between items-center gap-1">
        <div className="xs:p-2 flex flex-col items-center justify-between w-full h-full ds:p-0">
          {step === 1 ? (
            <Step1 />
          ) : step === 2 ? (
            <Step2 />
          ) : step === 3 ? (
            <Step3 />
          ) : step === 4 ? (
            <Step4 />
          ) : (
            <Thnks />
          )}
        </div>
        <div className="flex ds:w-[70%] bg-white items-center justify-between pr-1 pl-1 ds:static xs:absolute xs:bottom-0 xs:h-24 xs:pr-5 xs:pl-5 xs:w-full">
          <Goback />
          <Nextstep />
          <Confirm />
        </div>
      </div>
    </div>
  );
}

export default Card;
