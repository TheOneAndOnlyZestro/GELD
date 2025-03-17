import React from "react";
import { query, item, getCount } from "@/db/db";
import Item from "./Item";
import { revalidatePath } from "next/cache";
import Refresh from "./Refresh";
const ItemList = async () => {
  const items: item[] = await query("SELECT * FROM items");
  const countInitial: number = await getCount();
  return (
    <div className="flex flex-col">
      <div>
        {items
          .sort((a, b) => (a.id ? a.id : 0) - (b.id ? b.id : 0))
          .map((i) => (
            <Item info={i} key={i.id} />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
