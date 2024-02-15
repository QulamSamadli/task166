import React from 'react';
import { categories, details } from '../../data';
import { FaClock } from "react-icons/fa";

const Filter = () => {
  return (

    <div className='container my-20'>

      <div className='text-center my-20'><p>Ən çox işlənənlər</p>
        <h2 className='text-[36px] font-bold'>İmtahanlar</h2></div>
      <div className='flex  justify-between flex-wrap '>
        <div className='flex flex-col my-6'>
          <h2 className='text-[20px] font-semibold'>Filter</h2>
          <p className='text-[14px] text-[background: #00000099;
]'>Kategoriyalar</p>
          {
            categories.map(({ id, title }) => (
              <button className='bg-[red] w-[244px] border rounded-lg text-left p-4 my-1' key={id}>
                {title}
              </button>
            ))
          }
          <div className='flex flex-col '>
            <p>Etiketlər</p>
            {categories.map(category => (
              category.sinif ? (
                category.sinif.map(({ id, sin }) => (
                  <button className='bg-[red] w-[244px] border rounded-lg text-left p-3 my-1' key={id}>
                    {sin}
                  </button>
                ))
              ) : null
            ))}
          </div>
        </div>

        <div className='grid grid-cols-3 gap-4 '>
          {
            details.map(({ id, title, time, questions1, questions2, comments, hashtag1, hashtag2, price }) => {
              return <div className=' bg-[#FAFAFA] flex flex-col gap-4 border border-[#FAFAFA] p-6' key={id}>
                <h2 className='text-[20px] font-bold'>{title}</h2>
                <div className='flex justify-between gap-8'>
                  <p className='flex items-center gap-2'><FaClock />{time}</p>
                  <p className='flex items-center gap-2'> <img src="./ranking.png" alt="" /> {comments}</p>
                </div>
                <div className='text-[14px] text-[#000000CC] border-b-2 py-8'>
                <h2 className='font-medium'>Suallar</h2>
                  <p>{questions1}</p>
                  <p>{questions2}</p>
                </div>

                <div className='flex gap-4 text-[14px]'>
                  <div className='bg-[#D9D9D9] border p-2 border-[#D9D9D9] rounded-xl'>{hashtag1}</div>
                  <div className='bg-[#D9D9D9] border p-2 border-[#D9D9D9] rounded-xl'>{hashtag2}</div>
                  </div>
                <button className='border-[1px] rounded-xl p-4'>{price}</button>
              </div>



            })
          }
        </div>
      </div>
    </div>
  );
};

export default Filter;
