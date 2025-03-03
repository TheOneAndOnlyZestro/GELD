import React from "react";
import { query, item } from "@/db/db";
const ItemList = async () => {
  const items: item[] = await query("SELECT * FROM items");
  return (
    <div>
      {items.map((i) => (
        <div
          key={i.id}
          className="flex border-2 rounded-2xl p-2 m-2 items-center"
        >
          <div className="flex-2 p-3 bg-sky-300 text-3xl rounded-2xl m-1">
            <span className="font-bold">name: </span>
            {i.name
              .toLowerCase()
              .split("")
              .map((l, i) => {
                return i == 0 ? l.toUpperCase() : l.toLowerCase();
              })
              .join("")}
          </div>
          <div className="flex-1 p-3 bg-sky-300 text-2xl rounded-2xl m-1 text-center">
            {" "}
            {i.category}
          </div>
          <div className="flex-1 p-3 bg-sky-300 text-2xl rounded-2xl m-1 text-center">
            {" "}
            {i.price}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
