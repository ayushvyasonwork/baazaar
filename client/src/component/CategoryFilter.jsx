import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/productSlice";

const CategoryFilter = ({ onCategoryChange }) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.product.category);
    const categories = ["all", "men's clothing", "jewelery", "electronics", "women's clothing"];
    const handleCategoryChange = (category) => {
      dispatch(setCategory(category)); // Update category in product slice
      onCategoryChange?.(category); // Call custom callback if provided
    };  
    return (
      <div className="flex gap-4 mb-6 px-4 ">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-lg text-white ${
              selectedCategory === category ? "bg-blue-500" : "bg-gray-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    );
  };
  
  export default CategoryFilter;
  