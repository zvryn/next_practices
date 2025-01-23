import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className=" flex justify-between items-center">
        <div className="flex gap-4 text-2xl">
          <Link href="/">Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/info"}>Info</Link>
        </div>

        <div className="flex gap-4 text-2xl">
          <Link href={"/login"}>Login</Link>
          <Link href={"/register"}>Register</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
