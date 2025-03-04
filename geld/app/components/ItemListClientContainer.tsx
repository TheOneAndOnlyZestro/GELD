import React, { Suspense } from "react";
import { query, item } from "@/db/db";
import ItemListClient from "./ItemListClient";
//This should fetch our items in the server side of things
const ItemListClientContainer = () => {
  const items: Promise<item[]> = query("SELECT * FROM items");

  return (
    <Suspense fallback={<div>Loading....</div>}>
      <ItemListClient props={items} />
    </Suspense>
  );
};

export default ItemListClientContainer;
