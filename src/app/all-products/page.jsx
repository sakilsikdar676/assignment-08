"use client";

import ProductCard from "@/components/ProductCard";
import { Lightbulb } from "lucide-react";
import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

const AllProducts = () => {
  const [initialData, setInitialData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filteredItame, setfilteredItame] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://assignment-08-sage.vercel.app/data.json",
      );
      const data = await res.json();
      setInitialData(data);
      setFilteredData(data);
    };
    fetchData();
  }, []);

  const getSearchItame = (e) => {
    setfilteredItame(e.target.value.toLowerCase());
  };

  const handleSearch = () => {
    const filtered = initialData.filter((product) =>
      product?.name?.toLowerCase().includes(filteredItame.toLowerCase()),
    );
    setFilteredData(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
      <h2 className="text-3xl font-bold mb-4">All Products</h2>
      <p className="text-gray-600 mb-8">Your Go-to Destination for SunCart!</p>

      <div className="flex flex-1 max-w-2xl justify-center mx-auto items-center relative mb-5">
        <input
          type="text"
          onChange={getSearchItame}
          placeholder="Search by product name..."
          className="w-full bg-[#f5f7fa] py-2.5 px-6 rounded-full outline-none border border-transparent focus:border-blue-400 focus:bg-white transition-all"
        />
        <button
          onClick={handleSearch}
          className="bg-[#2b85ff] text-white p-3 rounded-full absolute right-0 hover:bg-blue-600 transition"
        >
          <FiSearch size={20} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filteredData.length > 0 ? (
          filteredData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-20 px-4 border border-dashed border-gray-200 rounded-3xl bg-gray-50/20">
            <div className="bg-white p-6 rounded-full shadow-sm mb-6">
              <Lightbulb className="text-yellow-300" size={50} />
            </div>

            <h3 className="text-2xl font-light text-gray-900 mb-8 tracking-tight">
              No Results Found
            </h3>

            <p className="text-gray-600">
              We couldn&apos;t find any products that match your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
