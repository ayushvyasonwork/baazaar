import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, setCartCategory } from "../redux/CartSlice";
import CategoryFilter from "../component/CategoryFilter";
import AddItem from "../component/AddItem";

const Cart = () => {
  const { filteredData } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <CategoryFilter
        flag={1}
        onCategoryChange={(category) => dispatch(setCartCategory(category))}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredData.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow flex flex-col justify-between"
          >
            <div>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain mb-4"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-sm text-gray-600 mb-2">
                {product.description.substring(0, 100)}...
              </p>
              <p className="text-lg font-bold text-gray-800">${product.price}</p>
              <AddItem product={product} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
