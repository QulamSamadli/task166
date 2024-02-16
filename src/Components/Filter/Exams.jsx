import { FaClock } from "react-icons/fa";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Exams = ({ activeCategory, activeClass }) => {
  console.log(activeClass);
  const [details, setDetails] = useState([]);
  const activeExams = details.filter(({ category, class: sinif }) => {
    if (activeClass > 0) {
      return activeClass === sinif;
    } else {
      return activeCategory === category;
    }
  });

  useEffect(() => {
    axios.get(import.meta.env.VITE_DB_URL + "details").then(({ data }) => {
      setDetails(data);
    });
  }, []);
  return (
    <div className="grid grid-cols-3 gap-4 ">
      {activeExams.map(
        ({
          time,
          comments,
          questions1,
          questions2,
          hastags,
          price,
          title,
          id,
        }) => {
          return (
            <div
              className=" bg-[#FAFAFA] flex flex-col gap-4 border border-[#FAFAFA] p-6"
              key={id}
            >
              <h2 className="text-[20px] font-bold">{title}</h2>
              <div className="flex justify-between gap-8">
                <p className="flex items-center gap-2">
                  <FaClock />
                  {time}
                </p>
                <p className="flex items-center gap-2">
                  <img src="./ranking.png" alt="" /> {comments}
                </p>
              </div>
              <div className="text-[14px] text-[#000000CC] border-b-2 py-8">
                <h2 className="font-medium">Suallar</h2>
                <p>{questions1}</p>
                <p>{questions2}</p>
              </div>

              <div className="flex gap-4 text-[14px]">
                {hastags?.map((hashtag) => {
                  return (
                    <div className="bg-[#D9D9D9] border p-2 border-[#D9D9D9] rounded-xl">
                      {hashtag}
                    </div>
                  );
                })}
              </div>
              <button className="border-[1px] rounded-xl p-4">{price}</button>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Exams;
