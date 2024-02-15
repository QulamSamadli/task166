import React, { useState } from 'react'
import { categories } from '../../data';


const Category = () => {
    const [category, setCategory] = useState("")

    console.log(category);

    return (
        <div className='container grid grid-cols-1 text-center'>
            <div className='text-center my-6'>
                <p>İmtahan</p>
                <h2>Kateqoriya seç</h2>
            </div>
            <div className='grid grid-cols-4 gap-2 '>
                {
                    categories.map(({ id, title, category }) => {
                        return <div className='border rounded-xl p-4' onClick={() => {
                            setCategory(category)
                        }} key={id}>{title}</div>
                    })
                }
            </div>
        </div>
    )
}

export default Category