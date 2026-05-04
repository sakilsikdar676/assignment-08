"use client";
import Link from "next/link";
import { Home, Ghost, search } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#050510] flex items-center justify-center p-6 font-sans text-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-2xl w-full text-center relative z-10">
        {/* Animated Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Ghost size={120} className="text-cyan-400 animate-bounce" />
            <div className="absolute -bottom-2 w-full h-4 bg-black/40 blur-md rounded-full scale-x-75"></div>
          </div>
        </div>

        {/* Funny Error Text */}
        <h1 className="text-9xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-700">
          404
        </h1>
        
        <h2 className="text-3xl font-bold mt-4 text-cyan-400">
          আরে ভাই! আপনি কোথায় চলে আসলেন? 🧭
        </h2>
        
        <p className="text-gray-400 mt-6 text-lg leading-relaxed">
          এই পেজটি সম্ভবত চা খেতে গেছে অথবা আমাদের মতো ইমোশনাল হয়ে কোথাও হারিয়ে গেছে। 
          বেশি খোঁজাখুঁজি করে লাভ নেই, কারণ এটি এখন মরীচিকা! 🌵
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-bold hover:scale-105 transition-all shadow-lg shadow-cyan-900/20"
          >
            <Home size={20} /> সোজা বাড়ি চলে যান (Home)
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 border border-white/10 bg-white/5 rounded-xl font-bold hover:bg-white/10 transition-all"
          >
            পিছে হটেন! (Go Back)
          </button>
        </div>

        {/* Funny Footer Note */}
        <p className="mt-12 text-sm text-gray-500 italic">
          ভুল পথে আসা অপরাধ নয়, কিন্তু ভুল পেজে বসে থাকাটা বোকামি। — জনৈক কোডার
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;