import React from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const TestProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-auto rounded-lg mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {product.title}
      </h2>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-blue-500 font-bold">${product.price}</p>
    </div>
  );
};

export default TestProductCard;
