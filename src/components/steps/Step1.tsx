"use client";
import { useEmail, useName, usePhone } from "@/store";
import Input from "../ui/input/Input";

function Step1() {
  const setName = useName();
  const setPhone = usePhone();
  const setEmail = useEmail();

  return (
    <div>
      <div>
        <h1 className="ds:text-3xl xs:text-xl font-bold text-Marine_blue  ">
          Personal info
        </h1>
        <p className="text-paragraph text-Cool_gray">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <form className="xs:mt-9 ds:mt-7">
        <Input
          id="name"
          value={setName.name}
          onchange={setName.setName}
          type="text"
          name="Name"
          holder="e.g Stephen King"
        />

        <Input
          id="email"
          value={setEmail.email}
          onchange={setEmail.setEmail}
          type="email"
          name="Email Address"
          holder="e.g stephenking@lorem.com"
        />

        <Input
          id="phone"
          value={setPhone.phone}
          onchange={setPhone.setPhone}
          type="text"
          name="Phone Number"
          holder="e.g +1 234 567 890"
        />
      </form>
    </div>
  );
}

export default Step1;
