import React, { useState } from 'react'

const categories = [
    {
        id: 1,
        title: "Buraxılış"
    },
    {
        id: 2,
        title: "Blok"
    },
    {
        id: 3,
        title: "Təkmilləşmə"
    },
    {
        id: 4,
        title: "İbtidai sinif"
    },
    {
        id: 5,
        title: "Liseylərə"
    },
    {
        id: 6,
        title: "Magistratura"
    },
    {
        id: 7,
        title: "Olimpiadalar",
        category: 'olimpiada'

    },
    {
        id: 8,
        title: "Fənn imtahanı",
        category: 'buraxilis'
    },
]
const Category = () => {
    const [category, setCategory] = useState("")

    console.log(category);

    return (
        <div className='container '>
            <div className='text-center my-6'>
                <p>asd</p>
                <h2>asdas</h2>
            </div>
            <div className='grid grid-cols-4 '>
                {
                    categories.map(({ id, title, category }) => {
                        return <div onClick={() => {
                            setCategory(category)
                        }} key={id}>{title}</div>
                    })
                }
            </div>
        </div>
    )
}

export default Category