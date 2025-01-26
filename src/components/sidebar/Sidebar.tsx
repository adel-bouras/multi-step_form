"use client";
import Image from "next/image";
import mobilebg from "@/../public/bg-sidebar-mobile.svg";
import desktopbg from "@/../public/bg-sidebar-desktop.svg";
import { useEffect, useState } from "react";
import { useStep } from "@/store";

function Step(prop: { index: number; isActive: boolean; text: string }) {
  return (
    <li className="flex items-center justify-start gap-6">
      <div
        className={`flex items-center justify-center rounded-full w-10 h-10 font-bold border-Pastel_blue border-2 ${
          prop.isActive
            ? "text-Marine_blue bg-Pastel_blue"
            : "bg-transparent text-Light_blue"
        } `}
      >
        {prop.index}
      </div>
      <div className="xs:hidden ds:flex ds:flex-col ds:items-start ds:justify-center">
        <p className="ds:text-Magnolia text-xs">STEP {prop.index}</p>
        <h1 className="ds:text-white ds:font-bold">{prop.text}</h1>
      </div>
    </li>
  );
}

function Sidebar() {
  const [bg, setBg] = useState(mobilebg);
  const handleResize = () => {
    window.innerWidth < 1440 ? setBg(mobilebg) : setBg(desktopbg);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const value = useStep((state) => state.step);
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="select-none bg-cover xs:w-full xs:h-[172px] xs:absolute xs:bg-center ds:z-10 xs:top-0 xs:z-0 xs:left-0 ds:static ds:w-[274px] ds:h-[568px]                                   "
    >
      <ul className="flex ds:flex-col ds:items-start ds:justify-start ds:m-0 p-10 xs:flex-row xs:items-start xs:-mt-4 xs:justify-center xs:gap-5">
        <Step index={1} isActive={value === 1} text="YOUR INFO" />
        <Step index={2} isActive={value === 2} text="SELECT PLAN" />
        <Step index={3} isActive={value === 3} text="ADD-ONS" />
        <Step index={4} isActive={value >= 4} text="SUMMARY" />
      </ul>
    </div>
  );
}

export default Sidebar;
