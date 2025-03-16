"use client";
import React from "react";
import { MdDelete } from "react-icons/md";
import { useItemCreatorStore } from "../ItemCreator/ItemCreatorStore";

const Delete = ({ ItemID }: { ItemID: number }) => {
  const toggleShouldChange = useItemCreatorStore(
    (state) => state.toggleShouldChange
  );
  const onDelete = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/items", {
        method: `DELETE`,
        body: JSON.stringify({ id: ItemID }),
      });
      const actual = await res.json();
      toggleShouldChange();
    } catch (err) {
      console.log(
        `An error has occured making a POST request, ERROR -> ${err}`
      );
    }
  };
  return (
    <button
      className="flex-1 flex bg-red-400 h-full items-center m-0.5 rounded-2xl"
      onClick={onDelete}
    >
      <MdDelete className="flex-1 scale-200" />
    </button>
  );
};

export default Delete;
