import React from "react";
import Edit from "./Edit";
import Delete from "./Delete";

const Control = ({ ItemID }: { ItemID: number }) => {
  return (
    <span className="flex-1 flex items-center justify-center">
      <Edit ItemID={ItemID} />
      <Delete ItemID={ItemID} />
    </span>
  );
};

export default Control;
