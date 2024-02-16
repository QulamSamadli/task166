import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Responsive from "../Responsive";

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);
  return (
    <div className="flex items-center px-4">
      <header className="container  items-center justify-between  py-4 ">
        <div>
          <NavLink
            className=" relative  text-[36px] font-bold  text-black"
            to="/"
          >
            Logo
          </NavLink>
        </div>
        <div className="hidden md:flex ">
          <nav className="flex gap-2 font-medium ">
            <NavLink
              className="relative hover:text-[red] duration-300"
              to="/haqqimizda"
            >
              Haqqımızda
            </NavLink>
            <NavLink
              className="relative hover:text-[red] duration-300"
              to="/kitablar"
            >
              Kitablar
            </NavLink>
            <NavLink
              className="relative hover:text-[red] duration-300"
              to="/imtahanlar"
            >
              İmtahanlar
            </NavLink>
            <NavLink
              className="relative hover:text-[red] duration-300"
              to="/elaqe"
            >
              Bizimlə əlaqə
            </NavLink>
          </nav>
          <div className="flex gap-2">
            <NavLink
              className=" relative  border p-2 rounded-xl hover:bg-black hover:text-white  duration-500"
              to="/daxilol"
            >
              Daxil ol
            </NavLink>
            <NavLink
              className="relative border p-2 rounded-xl bg-black text-white hover:bg-white hover:text-black duration-500"
              to="/qeydiyyat"
            >
              Qeydiyyat
            </NavLink>
          </div>
        </div>
      </header>
      <div className="py-4 block " onClick={() => setShowMobile((pre) => !pre)}>
        <GiHamburgerMenu />
      </div>
      <Responsive hamburger={showMobile} setOpen={setShowMobile} />
    </div>
  );
};

export default Navbar;
