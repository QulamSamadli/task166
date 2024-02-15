import React, { useState } from 'react'

const categories = [
    {
        id: 1,
        title: "Buraxılış",
        category: 'buraxilis'
    },
    {
        id: 2,
        title: "Blok",
        category: 'blok'
    },
    {
        id: 3,
        title: "Təkmilləşmə",
        category: 'tekmillesme'
    },
    {
        id: 4,
        title: "İbtidai sinif",
        category: 'ibtidai'
    },
    {
        id: 5,
        title: "Liseylərə",
        category: 'lisey'
    },
    {
        id: 6,
        title: "Magistratura",
        category: 'magistratura'
    },
    {
        id: 7,
        title: "Olimpiadalar",
        category: 'olimpiada'

    },
    {
        id: 8,
        title: "Fənn imtahanı",
        category: 'fenn'
    },
]
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