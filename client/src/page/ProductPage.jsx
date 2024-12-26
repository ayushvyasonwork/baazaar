import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddItem from "../component/AddItem";

const ProductPage = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.product.allData.find((item) => item.id === parseInt(id))
  );
  if (!product) {
    return <div className="text-center text-red-500 text-xl">Product not found!</div>;
  }
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8 items-center border shadow-md p-6 rounded-lg bg-white">
        <div className="w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-600 text-lg">{product.description}</p>
          <div className="text-2xl font-semibold text-orange-600">Price: ${product.price}</div>
          <div className="flex gap-4 items-center mt-4">
            <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold">
              ⭐ {product.rating.rate}
            </div>
            <div className="text-gray-600 text-lg">({product.rating.count} reviews)</div>
          </div>
          <AddItem product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
