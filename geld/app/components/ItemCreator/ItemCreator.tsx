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
  return (
    <>
      {show && (
        <div
          className={`
         absolute
         top-1/2 left-1/2 -translate-1/2
         w-3/4
         h-2/3
         p-5
         bg-amber-300
         rounded-2xl
         border-2
         transition duration-200
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
          </form>
        </div>
      )}
    </>
  );
};

export default ItemCreator;
