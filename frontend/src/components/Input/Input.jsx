import React from "react";
import { VerticalDivider } from "../Divider";

export const Input = ({ icon, type, placeholder, value, onChange, name, customStyles }) => {
  return (
    <div
      className={`flex h-10 flex-row items-center rounded-lg border-2 border-input-stroke border-opacity-[7%] 
        bg-light-inputFill focus-within:border-light-primary dark:bg-dark-inputFill ${customStyles}`}
    >
      <span
        alt={`input-incon-${name}`}
        className="flex w-14 items-center justify-center text-input-icon"
      >
        {icon}
      </span>
      <VerticalDivider customStyles={"h-2/3"} />
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        className="peer w-full rounded-lg bg-transparent px-4 text-light-secondary placeholder-input-text focus:outline-none"
      />
    </div>
  );
};
