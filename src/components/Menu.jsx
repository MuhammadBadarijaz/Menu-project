import React from 'react'
import Menuitems from './Menuitems'

const Menu = ({items}) => {
    
    
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
        
        {items.map((item)=>(

        <Menuitems 
        key={item.id}
         {...item}
         />
        ))}
    </div>
  )
}

export default Menu