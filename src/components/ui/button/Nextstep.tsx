"use client";
import React from "react";
import { useEmail, useName, usePhone, useStep } from "@/store";

function Nextstep() {
  const Step = useStep();
  const email = useEmail();
  const name = useName();
  const phone = usePhone();

  const handleClick = () => {
    let next: boolean = true;

    if (!email.email) {
      const input = document.getElementById("emailid");
      const message = document.getElementById("emailerrormessage");
      if (input) input.style.outlineColor = "red";
      if (message) {
        message.classList.remove("invisible");
        message.classList.add("visible");
      }
      next = false;
    }

    if (email.email && !/\S+@\S+\.\S+/.test(email.email)) {
      const input = document.getElementById("emailid");
      const message = document.getElementById("emailerrormessage");
      if (input) input.style.outlineColor = "red";
      if (message) {
        message.classList.remove("invisible");
        message.classList.add("visible");
        message.innerHTML = "Invalide email";
      }
      next = false;
    }

    if (!name.name) {
      const input = document.getElementById("nameid");
      const message = document.getElementById("nameerrormessage");
      if (input) input.style.outlineColor = "red";
      if (message) {
        message.classList.remove("invisible");
        message.classList.add("visible");
      }
      next = false;
    }

    if (!phone.phone) {
      const input = document.getElementById("phoneid");
      const message = document.getElementById("phoneerrormessage");
      if (input) input.style.outlineColor = "red";
      if (message) {
        message.classList.remove("invisible");
        message.classList.add("visible");
      }
      next = false;
    }
    if (next) Step.setStep(Step.step + 1);
  };

  return (
    <button
      onClick={
        Step.step === 1 ? handleClick : () => Step.setStep(Step.step + 1)
      }
      className={`
  ${Step.step >= 4 ? "invisible" : "block"} 
  font-bold text-white bg-Marine_blue xs:rounded-sm ds:rounded-lg w-24 h-11 hover:bg-blue-900 select-none
   justify`}
    >
      Next Step
    </button>
  );
}

export default Nextstep;
