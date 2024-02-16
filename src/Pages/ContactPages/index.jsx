import React, { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { FaCalendar } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import axios from "axios";
const Contact = () => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    axios.get(import.meta.env.VITE_DB_URL + "comment").then(({ data }) => {
      setComment(data);
    });
  }, []);

  return (
    <>
      <div className="bg-black">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="text-white m-8">
              <h2 className="text-[36px] font-bold text-white">
                3-cü sinif imtahanı
              </h2>
              <ul className="text-[14px] ">
                <li className="py-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </li>
                <li className="py-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </li>
                <li className="py-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </li>
              </ul>
              <button className="border border-white text-black bg-white rounded-xl p-4 hover:border-[red] hover:text-black hover:bg-[red] duration-500">
                1 Azn-imtahanı al
              </button>
            </div>
            <div>
              <img src="./Saly-10.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 container justify-center my-8">
        <div className=" flex flex-col flex-wrap gap-6 p-6 border rounded-lg shadow-[4px_4px_8px_4px_#0000000D]">
          <h2 className="text-[32px] font-bold">Məlumat</h2>
          <div className="flex gap-4 ">
            <p className="grid grid-cols-1 items-center md:flex md:gap-2">
              <FaClock />
              45 dəqiqə
            </p>
            <p className="grid grid-cols-1 items-center md:flex md:gap-2">
              <GrNotes />
              20 sual
            </p>
            <p className="grid grid-cols-1 items-center md:flex md:gap-2">
              <FaCalendar />
              22.05.2023 hazırlanıb
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[20px] font-bold">Suallar</p>
            <div className="flex flex-col gap-2">
              <p>Azərbaycan dili-10 sual</p>
              <p>Rizyyaziyyat-10 sual</p>
            </div>
          </div>
        </div>

        <div className="p-6  flex flex-col gap-6 border rounded-lg shadow-[4px_4px_8px_4px_#0000000D]">
          <p className="text-[20px] font-bold">İmtahan üzrə nəticələr</p>
          <div className="flex flex-col gap-4 ">
            <div>
              <div className="flex justify-between gap-4">
                <div>
                  <p className="flex items-center">
                    <FaMedal />
                    Ilahə Nəzərova
                  </p>
                </div>
                <div className="flex mx-8">
                  <p>20 bal</p>
                  <p>-00 dəq</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between gap-4">
                <div>
                  <p className="flex items-center">
                    <FaMedal />
                    Ilahə Nəzərova
                  </p>
                </div>
                <div className="flex mx-8">
                  <p>20 bal</p>
                  <p>-12 dəq</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between gap-4">
                <div>
                  <p className="flex items-center">
                    <FaMedal />
                    Ilahə Nəzərova
                  </p>
                </div>
                <div className="flex mx-8">
                  <p>19 bal</p>
                  <p>-12 dəq</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between gap-4">
                <div>
                  <p className="flex items-center">
                    <FaMedal />
                    Ilahə Nəzərova
                  </p>
                </div>
                <div className="flex mx-8">
                  <p>18 bal</p>
                  <p>-12 dəq</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between gap-4">
                <div>
                  <p className="flex items-center">
                    <FaMedal />
                    Ilahə Nəzərova
                  </p>
                </div>
                <div className="flex  mx-8">
                  <p>17 bal</p>
                  <p>-12 dəq</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-8">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-[36px] font-bold my-6">Rəylər</h2>
          <img src="./rating.png" alt="" />
        </div>
      </div>
      <div className="container my-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {comment.map(({ id, name, img, rating, title }) => {
            return (
              <div
                className=" flex flex-col gap-4 p-6 border border-[#FAFAFA] bg-[#FAFAFA] rounded-xl"
                key={id}
              >
                <h2 className="flex items-center gap-4 font-semibold">
                  <IoPersonCircle />
                  {name}
                </h2>
                <div className="grid grid-cols-2 items-center">
                  <img src={img} alt="" />
                  <p className="text-[14px] text-[#00000099]">{rating}</p>
                </div>
                <p className="text-[14px] text-[#000000CC]">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Contact;
