import ProductCard from '@/components/ProductCard';
import React from 'react';

const AllProducts = async () => {
    const res = await fetch("https://assignment-08-sage.vercel.app/data.json");
    const data = await res.json();
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <h2 className="text-3xl font-bold mb-4">All Products</h2>
        <p className="text-gray-600 mb-8" >Your Go-to Destination for SunCart!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {
                data.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
        </div>
    );
};

export default AllProducts;