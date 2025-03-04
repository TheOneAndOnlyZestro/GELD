"use client";
import React from "react";
import { useShowItemCreatorStore } from "../AddButton/AddButtonStore";

const Overlay = () => {
  const show = useShowItemCreatorStore((state) => state.show);
  return (
    <>
      {show && (
        <div
          className="
         w-screen
         h-screen
         absolute
         p-0
         m-0
         top-1/2
         left-1/2
         -translate-1/2
         bg-gray-800
         opacity-75
         "
        ></div>
      )}
    </>
  );
};

export default Overlay;
