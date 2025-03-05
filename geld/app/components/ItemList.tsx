import React from "react";
import { query, item } from "@/db/db";
import Item from "./Item";
const ItemList = async () => {
  const items: item[] = await query("SELECT * FROM items");
  return (
    <div>
      {items.map((i) => (
        <Item info={i} key={i.id} />
      ))}
    </div>
  );
};

export default ItemList;
