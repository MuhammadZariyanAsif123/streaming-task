import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";

const ToogleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);

    document.querySelector("body").style.backgroundColor = isChecked
      ? "white"
      : "black";
  };

  return (
    <div className=" mr-4">
      <label className="themeSwitcherTwo inline-flex   relative cursor-pointer select-none items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="sr-only"
        />
        <Sun color="#400000" strokeWidth={3} />{" "}
        <span
          className={`slider mx-4 flex h-6 w-[60px] items-center rounded-full p-1 duration-200 ${
            isChecked ? "bg-[#050505]" : "bg-[#CCCCCE]"
          }`}
        >
          <span
            className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
              isChecked ? "translate-x-[28px]" : ""
            }`}
          ></span>
        </span>
        <Moon color="#400000" strokeWidth={3} />
      </label>
    </div>
  );
};

export default ToogleSwitch;
