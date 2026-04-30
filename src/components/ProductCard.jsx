import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        {product.discount && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {product.discount}% OFF
          </span>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{product.category}</p>
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {product.name}
        </h3>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-blue-600">
              ${product.price}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${product.oldPrice}
              </span>
            )}
          </div>

          <Link href={`/all-products/${product.id}`}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors">
              Viw Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
