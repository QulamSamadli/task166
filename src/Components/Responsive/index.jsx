import React from "react";
import { NavLink } from "react-router-dom";

const Responsive = () => {
  return (
    <header className="flex  flex-col  p-4 gap-4 rounded-md bg-[#D9D9D9] border w-[100%] items-center  justify-center h-[100%] top-0 fixed  left-[0]  z-10">
      <button>X</button>
      <div>
        <NavLink to="/">Logo</NavLink>
      </div>
      <nav className="flex flex-col gap-4 items-center ">
        <NavLink to="/haqqimizda">Haqqımızda</NavLink>
        <NavLink to="/kitablar">Kitablar</NavLink>
        <NavLink to="/imtahanlar">İmtahanlar</NavLink>
        <NavLink to="/elaqe">Bizimlə əlaqə</NavLink>
      </nav>
      <div className="flex flex-col gap-4 items-center">
        <NavLink to="/daxilol">Daxil ol</NavLink>
        <NavLink to="/qeydiyyat">Qeydiyyat</NavLink>
      </div>
    </header>
  );
};

export default Responsive;
