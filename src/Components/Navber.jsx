import React from 'react'
import { NavLink } from 'react-router-dom'

const Navber = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg rounded-2xl">
      
    <div className="flex justify-center gap-6">
        <NavLink
        to="/"
        className="text-white text-lg font-semibold px-4 py-2 rounded-lg transition duration-300 hover:bg-gray-700"
          activeClassName="bg-blue-500"
          >
          Home
         </NavLink>
        <NavLink
        to="/pastes"
        className="text-white text-lg font-semibold px-4 py-2 rounded-lg transition duration-300 hover:bg-gray-700"
        activeClassName="bg-blue-500"
        >
          Paste
         </NavLink>
    </div>
    </nav>
  )
}

export default Navber