import React from "react";
import { NavLink } from "react-router-dom";

const Responsive = ({ setOpen,hamburger=false }) => {
  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <div className={`flex  flex-col  p-4 gap-4 rounded-md bg-[#D9D9D9] border w-[100%] items-center  justify-center h-[100%] top-0 fixed  left-[0]  z-10  ${
        hamburger ? "translate-x-0" : "translate-x-[100%]"
      }`}>
      <button onClick={closeMenu}>Xxxxxx</button>
      <div>
        <NavLink onClick={closeMenu} to="/">
          Logo
        </NavLink>
      </div>
      <nav className="flex flex-col gap-4 items-center ">
        <NavLink onClick={closeMenu} to="/haqqimizda">
          Haqqımızda
        </NavLink>
        <NavLink onClick={closeMenu} to="/kitablar">
          Kitablar
        </NavLink>
        <NavLink onClick={closeMenu} to="/imtahanlar">
          İmtahanlar
        </NavLink>
        <NavLink onClick={closeMenu} to="/elaqe">
          Bizimlə əlaqə
        </NavLink>
      </nav>
      <div className="flex flex-col gap-4 items-center">
        <NavLink onClick={closeMenu} to="/daxilol">
          Daxil ol
        </NavLink>
        <NavLink onClick={closeMenu} to="/qeydiyyat">
          Qeydiyyat
        </NavLink>
      </div>
    </div>
  );
};

export default Responsive;
