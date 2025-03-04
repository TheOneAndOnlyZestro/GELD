import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex m-5">
      <Link
        href={"/"}
        className="flex-1 p-2 m-2 bg-sky-300 rounded-sm text-center"
      >
        Home
      </Link>
      <Link
        href={"/About"}
        className="flex-1 m p-2 m-2 bg-sky-300 rounded-sm text-center"
      >
        About
      </Link>
    </div>
  );
};

export default Navbar;
