import React, { useState } from 'react'
import { categories } from '../../data';


const Category = () => {
    const [category, setCategory] = useState("")

    console.log(category);

    return (
        <div className='container grid grid-cols-1 text-center my-20'>
            <div className='text-center my-6'>
                <p>İmtahan</p>
                <h2 className='text-[36px] font-bold'>Kateqoriya seç</h2>
            </div>
            <div className='grid grid-cols-4 gap-2 '>
                {
                    categories.map(({ id, title, category }) => {
                        return <button className='shadow-[4px_4px_8px_0px_#0000000D] font-semibold  p-4 h-[60px] bg-[#FAFAFA] border rounded-xl ' onClick={() => {
                            setCategory(category)
                        }} key={id}>{title}</button>
                    })
                }
            </div>
        </div>
    )
}



export default Category