import Link from "next/link";
import React from "react";
import { FiDroplet, FiSun, FiSmile } from "react-icons/fi";

const SummerCare = () => {
  const tips = [
    {
      id: 1,
      title: "Stay Hydrated",
      description:
        "Drink at least 8-10 glasses of water daily to keep your body hydrated and energized during the heat.",
      icon: <FiDroplet className="text-blue-500" size={30} />,
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      title: "Skincare Routine",
      description:
        "Always apply SPF 30+ sunscreen before heading out to protect your skin from harmful UV rays.",
      icon: <FiSun className="text-orange-500" size={30} />,
      bgColor: "bg-orange-50",
    },
    {
      id: 3,
      title: "Healthy Summer Diet",
      description:
        "Incorporate seasonal fruits like watermelon and leafy greens into your diet to stay cool naturally.",
      icon: <FiSmile className="text-green-500" size={30} />,
      bgColor: "bg-green-50",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Summer Care Tips ☀️
        </h2>
        <p className="text-lg text-gray-600 mt-3">
          Essential advice to keep you healthy and glowing this summer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className={`${tip.bgColor} p-8 rounded-3xl border border-transparent hover:border-gray-200 transition-all duration-300 shadow-sm hover:shadow-xl group`}
          >
            <div className="mb-5 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:rotate-6 transition-transform">
              {tip.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">
              {tip.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-md">
              {tip.description}
            </p>
          </div>
        ))}
      </div>

      {/* Call to Action Banner */}
      <div className="mt-20 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 rounded-[2rem] p-12 text-white text-center shadow-2xl">
        <h3 className="text-3xl font-black mb-4">
          Looking for Summer Essentials?
        </h3>
        <p className="text-lg mb-8 font-medium opacity-95">
          Discover the best products to beat the heat at SunCart.
        </p>
        <Link href="/all-products">
          <button className="bg-white text-orange-600 font-bold py-4 px-10 rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg uppercase tracking-wider text-sm">
            Shop the Collection
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SummerCare;
