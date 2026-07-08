import React, { useState } from 'react'
import Categories from './components/Categories'
import Menuitems from './components/Menuitems'
import menu from './Data'
import Menu from './components/Menu'

const App = () => {

  const [items, setItems] = useState(menu)
  const filteritems = (category) =>{
    if (category === "All"){
      setItems(menu);
    return;
  }
const newitems = menu.filter((item)=>item.category === category)
setItems(newitems);
  };
  return (
   <main className="min-h-screen bg-gray-50 py-10">
    <h1  className="text-center text-4xl font-bold">Our Menu</h1>
    <div className="w-24 h-1 bg-yellow-500 mx-auto mt-2">
    </div>
      <Categories filteritems={filteritems} />
      <Menu items={items}/>
   </main>
  )
}

export default App