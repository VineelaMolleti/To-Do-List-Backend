import React from "react";
export default function Header({toggleView,isCardView}) {
   return(
    <header className="p-4 bg-blue-500 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">To-Do List</h1>
      <button onClick={toggleView} className="bg-white text-blue-500 p-2 rounded">
         {isCardView ? "Switch to List View" : "Switch to Card View"}
      </button>  
    </header>
   );
}