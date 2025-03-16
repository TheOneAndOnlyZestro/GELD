import React from "react";
import { query, item } from "@/db/db";
import Item from "./Item";
const ItemList = async () => {
  const items: item[] = await query("SELECT * FROM items");
  return (
    <div>
      {items
        .sort((a, b) => (a.id ? a.id : 0) - (b.id ? b.id : 0))
        .map((i) => (
          <Item info={i} key={i.id} />
        ))}
    </div>
  );
};

export default ItemList;
