"use client";
import React from "react";
import { MdEdit } from "react-icons/md";
import { useItemCreatorStore } from "../ItemCreator/ItemCreatorStore";
import { useShowItemCreatorStore } from "../AddButton/AddButtonStore";
const Edit = ({ ItemID }: { ItemID: number }) => {
  const toggleShow = useShowItemCreatorStore((state) => state.toggleShow);
  const setModeUpdate = useItemCreatorStore((state) => state.setModeUpdate);

  const setUpdateItemID = useItemCreatorStore((state) => state.setUpdateItemID);

  const onUpdate = () => {
    setModeUpdate();
    setUpdateItemID(ItemID);
    toggleShow();
  };
  return (
    <button
      className="flex-1 flex bg-green-400 h-full items-center m-0.5 rounded-2xl"
      onClick={onUpdate}
    >
      <MdEdit className="flex-1 scale-200" />
    </button>
  );
};

export default Edit;
