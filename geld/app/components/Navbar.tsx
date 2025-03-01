import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="p-2 flex">
      <Link
        href={"/"}
        className="flex-1 m-2 p-2 bg-sky-300 rounded-sm text-center"
      >
        Home
      </Link>
      <Link
        href={"/About"}
        className="flex-1 m-2 p-2 bg-sky-300 rounded-sm text-center"
      >
        About
      </Link>
    </div>
  );
};

export default Navbar;
