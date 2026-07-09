import React from "react";

const Categories = ({ filteritems }) => {
  return (
    <div className="flex justify-center gap-3 m-8">
      <button
        onClick={() => filteritems("All")}
        className="bg-yellow-500 text-white px-3 py-1 rouned"
      >
        All
      </button>
      <button
        onClick={() => filteritems("breakfast")}
        className="bg-yellow-500 text-white px-3 py-1 rouned"
      >
        Breakfast
      </button>
      <button
        onClick={() => filteritems("lunch")}
        className="bg-yellow-500 text-white px-3 py-1 rouned"
      >
        Lunch
      </button>
      <button
        onClick={() => filteritems("shakes")}
        className="bg-yellow-500 text-white px-3 py-1 rouned"
      >
        Shakes
      </button>
    </div>
  );
};

export default Categories;
