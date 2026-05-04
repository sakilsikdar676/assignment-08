"use client";
import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen bg-[#050510] flex flex-col items-center justify-center space-y-6">
      {/* Main Spinner */}
      <div className="relative flex items-center justify-center">
        {/* Outer Ring */}
        <div className="w-24 h-24 border-t-4 border-b-4 border-cyan-500 rounded-full animate-spin"></div>
        
        {/* Inner Ring */}
        <div className="absolute w-16 h-16 border-l-4 border-r-4 border-purple-500 rounded-full animate-spin-reverse"></div>
        
        {/* Center Glow */}
        <div className="absolute w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
      </div>

      {/* Loading Text */}
      <div className="text-center">
        <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse">
          একটু ধৈর্য ধরুন...
        </h2>
        <p className="text-gray-500 text-sm mt-2 tracking-widest uppercase">
          সবকিছু গুছিয়ে নিচ্ছি
        </p>
      </div>

      {/* Tailwind Custom CSS for Reverse Spin */}
      <style jsx global>{`
        @keyframes spin-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-reverse {
          animation: spin-reverse 1.5s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Loading;