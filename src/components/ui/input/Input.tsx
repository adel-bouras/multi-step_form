"use client";
import React from "react";

interface Props {
  id: string;
  value: string;
  name: string;
  type: string;
  holder: string;
  onchange: (e: string) => void;
}

function Input(props: Props) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="xs:text-sm ds:text-xl text-Marine_blue">{props.name}</h2>
        <h1
          id={props.id + "errormessage"}
          className="invisible text-Strawberry_red font-extrabold text-sm"
        >
          {props.name} Is Required
        </h1>
      </div>
      <input
        id={props.id + "id"}
        value={props.value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          props.onchange(e.target.value);
        }}
        type={props.type}
        placeholder={props.holder}
        className="focus:outline-Purplish_blue xs:h-10 xs:pl-5 w-full ds:mt-1 xs:mb-5 ds:mb-10 ds:h-12 xs:rounded-sm ds:rounded-sm border-Cool_gray  border-[1px]"
        required
      />
    </div>
  );
}

export default Input;
