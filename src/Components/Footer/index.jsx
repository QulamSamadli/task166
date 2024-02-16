import React from "react";
import { NavLink } from "react-router-dom";
import { MdForwardToInbox } from "react-icons/md";
import { CiPhone } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="container bg-[#FAFAFA] py-4 ">
      <div className="grid grid-cols-1   md:grid-cols-2">
        <div className="grid grid-cols-1 gap-4">
          <NavLink className="text-[36px] font-bold text-black" to="/">
            Logo
          </NavLink>
          <p className="flex items-center gap-2">
            <MdForwardToInbox /> qulam999@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <CiPhone />
            +994505813000
          </p>
        </div>
        <div className="grid grid-cols-1 items-end gap-4 my-2 ">
          <div className="grid md:grid-cols-4 grid-cols-1  text-[18px] font-medium">
            <NavLink
              className=" hover:text-[red] duration-300"
              to="/haqqimizda"
            >
              Haqqımızda
            </NavLink>
            <NavLink className="hover:text-[red] duration-300" to="/kitablar">
              Kitablar
            </NavLink>
            <NavLink
              className=" hover:text-[red] duration-300"
              to="/imtahanlar"
            >
              İmtahanlar
            </NavLink>
            <NavLink className=" hover:text-[red] duration-300" to="/elaqe">
              Bizimlə əlaqə
            </NavLink>
          </div>
          <div className="flex  md:justify-end gap-4 ">
            <img src="./instagram.png" alt="" />
            <img src="./facebook.png" alt="" />
            <img src="./whatsapp.png" alt="" />
            <img src="./telegram.png" alt="" />
          </div>
        </div>
      </div>
      <div className="border-t my-3 py-2">
        <p className="text-[14px] text-[#000000CC]">
          © 2024, şirkərin adı. Bütün hüquqlar qorunur
        </p>
      </div>
    </div>
  );
};

export default Footer;
