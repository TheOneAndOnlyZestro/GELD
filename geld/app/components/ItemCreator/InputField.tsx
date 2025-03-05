import { strict } from "assert";
import React from "react";

const InputField = ({
  label,
  placeholder,
  infoValue,
  onChangeFunc,
  inputType,
}: {
  label: string;
  placeholder: string;
  infoValue: any;
  onChangeFunc: (s: any) => void;
  inputType: string;
}) => {
  return (
    <>
      <label className="flex-1 text-2xl font-black">{label}:</label>
      <input
        type={inputType}
        placeholder={placeholder}
        className="flex-1 mb-3 text-2xl p-2 w-full 
              rounded-2xl border-2
            bg-amber-200
              outline-none
            focus:bg-amber-400"
        value={infoValue}
        onChange={(e) => onChangeFunc(e.target.value)}
      />
    </>
  );
};

export default InputField;
