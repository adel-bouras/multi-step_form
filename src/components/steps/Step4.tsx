"use client";
import { useBill, usePlan, usePrice, useServices, useStep } from "@/store";
import React from "react";

function Check() {
  const usestep = useStep();
  const useplan = usePlan();
  const useprice = usePrice();
  const usebill = useBill();
  const useservice = useServices();

  const total = (): number => {
    let total = 0;
    useservice.services.map((item) => {
      total += item === "o" ? 1 : 2;
    });
    total = usebill.billType === "mo" ? total : total * 10;
    total += useprice.price;
    return total;
  };

  const returnvalue = (i: string): number => {
    let price = i === "o" ? 1 : 2;
    return usebill.billType === "mo" ? price : price * 10;
  };

  return (
    <div className=" w-full flex items-center flex-col gap-5 ">
      <div className=" p-5 bg-Cool_gray bg-opacity-[0.1] ds:rounded-lg w-full xs:rounded-md">
        <div className="flex items-center justify-between w-full ds:h-20 xs:h-14">
          <div>
            <h1 className="text-Marine_blue text-lg font-extrabold">
              {useplan.plan} ({usebill.billType === "mo" ? "Monthly" : "Yearly"}
              )
            </h1>
            <p
              onClick={() => {
                usestep.setStep(2);
              }}
              className="cursor-pointer text-Cool_gray underline text-sm"
            >
              Change
            </p>
          </div>
          <h1 className="font-extrabold text-lg text-Marine_blue">
            ${useprice.price}/{usebill.billType}
          </h1>
        </div>{" "}
        <hr className="bg-Light_gray h-[2px] w[80%]" /> <br />
        <div className="w-full flex flex-col justify-center gap-5">
          {useservice.services.map((item) => (
            <div
              className="flex items-center justify-between w-full"
              key={item}
            >
              <p className="text-Cool_gray ds:text-sm xs:text-xs">
                {item === "o"
                  ? "Online service"
                  : item === "l"
                  ? "Larger storage"
                  : "Customizable profile"}
              </p>
              <h1 className="text-sm font-extrabold text-Marine_blue">
                +${returnvalue(item)}/{usebill.billType}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between w-[90%]">
        <p className="font-extrabold text-xs text-Cool_gray text-paragraph">
          Total (per {usebill.billType === "mo" ? "month" : "year"})
        </p>
        <h1 className="text-Purplish_blue font-extrabold text-xl ">
          +${total()}/{usebill.billType}
        </h1>
      </div>
    </div>
  );
}

function Step4() {
  return (
    <div className="xs:w-full h-full ds:w-[80%]">
      <div>
        <h1 className="text-Marine_blue font-extrabold ds:text-4xl xs:text-3xl">
          Finishing up
        </h1>
        <p className="text-paragraph text-Cool_gray text-sm">
          Double-check everything looks OK before confirming
        </p>{" "}
        <br />
      </div>
      <Check />
    </div>
  );
}

export default Step4;
