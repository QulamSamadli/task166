import axios from "axios";
import classNames from "classnames";
import React, { useEffect, useState } from "react";

const Categories = ({
  activeCategory,
  setActiveCategory,
  activeClass,
  setActiveClass,
}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(import.meta.env.VITE_DB_URL + "categories").then(({ data }) => {
      setCategories(data);
    });
  }, []);
  return (
    <div className="flex flex-col my-6">
      <h2 className="text-[20px] font-semibold">Filter</h2>
      <p
        className="text-[14px] text-[background: #00000099;
]"
      >
        Kategoriyalar
      </p>

      {categories.map(({ id, title, category }) => (
        <button
          className={classNames({
            "bg-[#F5F5F5] w-[244px] border rounded-lg text-left p-3 my-1": true,
            "bg-slate-900 text-white": category === activeCategory,
          })}
          key={id}
          onClick={() => {
            setActiveCategory(category)
            setActiveClass(0)
          }}
        >
          {title}
        </button>
      ))}

      {activeCategory === "ibtidai" && (
        <div className="flex flex-col ">
          <p>Etiketler</p>

          {categories
            .find(({ category }) => category === "ibtidai")
            ?.classes.map((item) => {
              return (
                <button
                className={classNames({
                  "bg-[#F5F5F5] w-[244px] border rounded-lg text-left p-3 my-1": true,
                  "bg-slate-900 text-white": item.class === activeClass,
                })}
                  key={item.id}

                  onClick={() => setActiveClass(item.class)}
                >
                  {item.title}
                </button>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Categories;
