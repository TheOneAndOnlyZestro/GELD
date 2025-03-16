import React from "react";
import { query, item } from "@/db/db";
import Item from "./Item";
import { revalidatePath } from "next/cache";
const ItemList = async () => {
  const items: item[] = await query("SELECT * FROM items");

  async function refresh() {
    "use server";
    revalidatePath("/");
  }
  return (
    <div className="flex flex-col">
      <button className="bg-amber-400 rounded-md h-10 m-5" onClick={refresh}>
        Refresh
      </button>
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
