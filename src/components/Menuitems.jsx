import React from 'react'

const Menuitems = ({img, title, price, desc }) => {
  return (
    <article className='bg-white shadow-lg rounded-lg overflow-hidden'>
        <img src={img} alt={title}
                className="h-70 w-full object-cover"

        />
<div className="p-4">

        <div className="flex justify-between items-center  pb-2">
            <h2 
            className="font-bold">
                {title}
            </h2>
            <span className="bg-yellow-500 text-white px-2 rounded">${price}</span>
        </div>
        <p className="mt-3 text-gray-500">{desc}</p>

</div>


    </article>
  )
}

export default Menuitems