import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import { useNavigate } from "react-router-dom";
import AddItem from "../component/AddItem";
import CategoryFilter from "../component/CategoryFilter";

const Homepage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { filteredData: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleProduct = (id) => {
    navigate(`/product/${id}`);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error loading products.</div>;
  }

  return (
    <div>
      <CategoryFilter flag={0} />
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow flex flex-col justify-between"
            >
              <div onClick={() => handleProduct(product.id)} className="cursor-pointer">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {product.description.substring(0, 100)}...
                </p>
                <p className="text-lg font-bold text-gray-800">${product.price}</p>
              </div>
              <AddItem product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
