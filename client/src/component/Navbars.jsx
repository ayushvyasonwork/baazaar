import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbars = () => {
  const { data } = useSelector((state) => state.cart);

  return (
    <div className="flex justify-between items-center px-6 py-3 sticky top-0 z-10 bg-cyan-700 shadow-md">
      <NavLink
        to="/"
        className="text-white text-lg font-bold hover:text-gray-200 transition-colors"
      >
       Baazaar
      </NavLink>
      <NavLink to="/cart" className="flex items-center gap-2">
        <button className="flex items-center gap-2 bg-white text-orange-500 font-semibold py-1 px-4 rounded-full shadow hover:bg-orange-600 hover:text-white transition-all">
          <p>Cart</p>
          <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">
            {data.length}
          </span>
        </button>
      </NavLink>
    </div>
  );
};

export default Navbars;
