"use client";
import React from "react";
import { useShowItemCreatorStore } from "../AddButton/AddButtonStore";
import { IoMdCloseCircle } from "react-icons/io";
import InputField from "./InputField";
import { item } from "@/db/db";
import { useItemCreatorStore } from "./ItemCreatorStore";
const ItemCreator = () => {
  const show: boolean = useShowItemCreatorStore((state) => state.show);
  const toggleShow = useShowItemCreatorStore((state) => state.toggleShow);

  const currentItem: item = useItemCreatorStore((state) => state.currentItem);

  const setItemName = useItemCreatorStore((state) => state.setItemName);
  const setItemCategory = useItemCreatorStore((state) => state.setItemCategory);
  const setItemPrice = useItemCreatorStore((state) => state.setItemPrice);
  const setItemStore = useItemCreatorStore((state) => state.setItemStore);
  const setItemDate = useItemCreatorStore((state) => state.setItemDate);

  const itemSubmission = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/items", {
        method: "POST",
        body: JSON.stringify({ data: currentItem }),
      });
      const actual = await res.json();
    } catch (err) {
      console.log(
        `An error has occured making a POST request, ERROR -> ${err}`
      );
    }
  };
  return (
    <>
      {show && (
        <div
          className={`
         absolute
         top-1/2 left-1/2 -translate-1/2
         w-3/4
         h-7/10
         p-5
         bg-amber-300
         rounded-2xl
         border-2
         transition duration-200
         overflow-auto
         `}
        >
          <IoMdCloseCircle className="flex-1 w-10 h-10" onClick={toggleShow} />
          <h1 className="flex-2 w-full font-black text-5xl">Add New Item</h1>

          <form className="flex flex-col items-start">
            <InputField
              label="Name"
              placeholder="Please enter Name"
              infoValue={currentItem.name}
              onChangeFunc={setItemName}
              inputType="text"
            />

            <InputField
              label="Category"
              placeholder="Please enter category"
              infoValue={currentItem.category}
              onChangeFunc={setItemCategory}
              inputType="text"
            />

            <InputField
              label="Price"
              placeholder="Please enter Price"
              infoValue={currentItem.price}
              onChangeFunc={setItemPrice}
              inputType="text"
            />
            <InputField
              label="Store"
              placeholder="Please enter store"
              infoValue={currentItem.store}
              onChangeFunc={setItemStore}
              inputType="text"
            />
            <InputField
              label="Date"
              placeholder="Please enter date"
              infoValue={currentItem.date}
              onChangeFunc={setItemDate}
              inputType="date"
            />
            <span className="w-full flex justify-center">
              <button
                className="w-1/3 text-center p-2 bg-amber-500
              rounded-xl
              font-black
              border-2"
                type="submit"
                onClick={(e) => itemSubmission(e)}
              >
                Add Button
              </button>
            </span>
          </form>
        </div>
      )}
    </>
  );
};

export default ItemCreator;
