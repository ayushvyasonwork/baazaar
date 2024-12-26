import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, decrement, increment } from "../redux/CartSlice";

const AddItem = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.data);
  const cartItem = cartItems.find((item) => item.id === product.id);

  const handleAdd = () => {
    dispatch(add(product));
  };

  const handleIncrement = () => {
    dispatch(increment(product.id));
  };

  const handleDecrement = () => {
    dispatch(decrement(product.id));
  };

  return (
    <div>
      {cartItem ? (
        <div className="flex items-center gap-2 mt-4">
          <button
            className="bg-cyan-700 text-white px-4 py-2 rounded-full"
            onClick={handleDecrement}
          >
            -
          </button>
          <span className="font-bold">{cartItem.quantity}</span>
          <button
            className="bg-cyan-700 text-white px-4 py-2 rounded-full"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
      ) : (
        <button
          className="bg-cyan-700 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded-full mt-4"
          onClick={handleAdd}
        >
          Add Item
        </button>
      )}
    </div>
  );
};

export default AddItem;
