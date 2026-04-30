"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const slides = [
    { id: 1, img: "https://images.pexels.com/photos/4540500/pexels-photo-4540500.jpeg", title: "Welcome to SunCart", sub: "Discover the best deals today!" },
    { id: 2, img: "https://images.pexels.com/photos/5383854/pexels-photo-5383854.jpeg", title: "Fresh Summer Collection", sub: "New arrivals are here." },
    { id: 3, img: "https://images.pexels.com/photos/7976823/pexels-photo-7976823.jpeg", title: "Smart Shopping", sub: "Quality products at your doorstep." },
    { id: 4, img: "https://images.pexels.com/photos/37319194/pexels-photo-37319194.jpeg", title: "Exclusive Offers", sub: "Up to 50% off on all accessories." },
  ];

  if (!mounted) {
    return <div className="w-full h-[500px] md:h-[600px] bg-gray-200 animate-pulse"></div>;
  }

  return (
    <div className="w-full h-[500px] md:h-[600px]">
      <Swiper
        spaceBetween={0}
        effect={'fade'}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Pagination]}
        className="mySwiper h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="relative w-full h-full bg-cover bg-no-repeat bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
              
              <div className="relative z-10 text-center text-white px-4">
                {/* 
                   Ekhane 'opacity-0' shoriye deya hoyeche jate text miss na hoy.
                   Custom 'animate-fade-up' class use kora hoyeche niche thaka CSS diye.
                */}
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-up">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-up-delay">
                  {slide.sub}
                </p>
                
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Animation ebong Pagination Style */}
      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fadeUp 0.8s ease-out forwards;
        }
        .animate-fade-up-delay {
          animation: fadeUp 0.8s ease-out 0.3s forwards;
          opacity: 0; /* Animation shuru hobar agey hidden thakbe */
        }
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.7;
        }
        .swiper-pagination-bullet-active {
          background: #2563eb !important;
          opacity: 1;
          width: 25px !important;
          border-radius: 5px !important;
          transition: all 0.3s;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;