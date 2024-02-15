import React from 'react';
import { categories, details } from '../../data';

const Filter = () => {
  return (
    <div className='container flex '>
      <div className='grid grid-cols-1 items-start gap-2'>
      <h2>Filter</h2>
        {
          categories.map(({ id, title }) => (
            <button className='bg-[red] w-[244px] border rounded-lg text-left p-2' key={id}>
              {title}
            </button>
          ))
        }
         <div className='flex flex-col items-start gap-2'>
        <p>Etiketlər</p>
        {categories.map(category => (
          category.sinif ? (
            category.sinif.map(({ id, sin }) => (
              <button className='bg-[red] w-[244px] border rounded-lg text-left p-2' key={id}>
                {sin}
              </button>
            ))
          ) : null
        ))}
      </div>
      </div>
     
      <div className='grid grid-cols-2'>
        {
            details.map(({id,title,time,questions1,questions2,comments,hashtag1,hashtag2,price})=>{
                return <div className='border' key={id}>
                    <h2>{title}</h2>
                    <div>
                        <p>{time}</p>
                        <p>{comments}</p>
                    </div>
                    <h2>Suallar</h2>
                    <div>
                        <p>{questions1}</p>
                        <p>{questions2}</p>
                    </div>
                    
                    <div>{hashtag1}</div>
                    <div>{hashtag2}</div>
                    <button>{price}</button>
                </div>

                

            })
        }
      </div>
    </div>
  );
};

export default Filter;
