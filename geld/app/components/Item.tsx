import { item } from "@/db/db";
import React from "react";
import Data from "./Data";
import Control from "./Edit&Delete/Control";

const Item = ({ info }: { info: item }) => {
  return (
    <div className="flex flex-col border-2 rounded-2xl p-2 m-5 items-center justify-center">
      <span className="flex w-full">
        <Data<String> label="Name" data={info.name} />

        <Data<String> label="Date" data={info.date} />
        <Control ItemID={info.id ? info.id : 0} />
      </span>
      <Data<String> label="Category" data={info.category} />

      <Data<number> label="Price" data={info.price} />

      <Data<String> label="Store" data={info.store} />
    </div>
  );
};

export default Item;
