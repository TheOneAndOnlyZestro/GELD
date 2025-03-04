"use client";
import React from "react";
import { IoIosAdd } from "react-icons/io";
import { useShowItemCreatorStore } from "./AddButtonStore";
const AddButton = () => {
  const show = useShowItemCreatorStore((state) => state.show);
  const toggleShow = useShowItemCreatorStore((state) => state.toggleShow);

  const showItemCreator = () => {
    toggleShow();
  };
  return (
    <div
      className="bg-sky-300
    text-center
    w-20 h-20 flex 
    justify-center 
    items-center 
    rounded-full
    absolute
    bottom-0
    right-0
    m-5
    border-2
    hover:bg-sky-400
    transition duration-300"
      onClick={showItemCreator}
    >
      <IoIosAdd className="flex-1 w-15 h-15" />
    </div>
  );
};

export default AddButton;
