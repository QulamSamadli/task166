import axios from "axios";
import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import Exams from "./Exams";

const Filter = () => {
  const [activeCategory, setActiveCategory] = useState("ibtidai");
  const [activeClass, setActiveClass] = useState(0);
  return (
    <div className="container my-20">
      <div className="text-center my-20">
        <p>Ən çox işlənənlər</p>
        <h2 className="text-[36px] font-bold">İmtahanlar</h2>
      </div>

      <div className="flex  justify-between flex-wrap ">
        <Categories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          activeClass={activeClass}
          setActiveClass={setActiveClass}
        />
        <Exams activeCategory={activeCategory} activeClass={activeClass}/>
      </div>
    </div>
  );
};

export default Filter;
