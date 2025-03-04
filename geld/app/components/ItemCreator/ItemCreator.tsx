"use client";
import React from "react";
import { useShowItemCreatorStore } from "../AddButton/AddButtonStore";
import { IoMdCloseCircle } from "react-icons/io";
const ItemCreator = () => {
  const show: boolean = useShowItemCreatorStore((state) => state.show);
  const toggleShow = useShowItemCreatorStore((state) => state.toggleShow);
  return (
    <>
      {show && (
        <div
          className={`
         absolute
         top-1/2 left-1/2 -translate-1/2
         w-3/4
         h-3/5
         p-5
         bg-amber-300
         rounded-2xl
         border-2
         transition duration-200
         `}
        >
          <IoMdCloseCircle className="w-10 h-10" onClick={toggleShow} />
          <form className="flex flex-col items-start">
            <label className="flex-1 text-2xl font-black">Name:</label>
            <input
              type="text"
              placeholder="Please enter name...."
              className="flex-1 mb-3 text-3xl p-5 w-full 
              rounded-2xl border-2
            bg-amber-200
              outline-none
            focus:bg-amber-400"
            />
            <label className="flex-1 text-2xl font-black">category:</label>
            <input
              type="text"
              placeholder="Please enter category...."
              className="flex-1 mb-3 text-3xl p-5 w-full 
              rounded-2xl border-2
            bg-amber-200
              outline-none
            focus:bg-amber-400"
            />
            <label className="flex-1 text-2xl font-black">price:</label>
            <input
              type="text"
              placeholder="Please enter price...."
              className="flex-1 mb-3 text-3xl p-5 w-full 
              rounded-2xl border-2
            bg-amber-200
              outline-none
            focus:bg-amber-400"
            />
          </form>
        </div>
      )}
    </>
  );
};

export default ItemCreator;
