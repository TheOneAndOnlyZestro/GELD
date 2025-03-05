import React from "react";

const Data = <T,>({ label, data }: { label: string; data: T }) => {
  return (
    <div className="flex-1 p-3 bg-sky-300 text-3xl rounded-2xl m-1 w-full">
      <span className="font-bold">{label}: </span>
      {String(data)}
    </div>
  );
};

export default Data;
