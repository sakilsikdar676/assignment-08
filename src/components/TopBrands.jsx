import React from 'react';

const TopBrands = () => {
  const brands = [
    { id: 1, name: "Aura", title: "Premium Skincare", imageUrl: "https://images.pexels.com/photos/5871592/pexels-photo-5871592.jpeg" },
    { id: 2, name: "Solace", title: "Summer Essentials", imageUrl: "https://images.pexels.com/photos/10542232/pexels-photo-10542232.jpeg" },
    { id: 3, name: "Vibe", title: "Youth Fashion", imageUrl: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg" },
    { id: 4, name: "Zenith", title: "Luxury Watches", imageUrl: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg" },
    { id: 5, name: "Glow", title: "Beauty Products", imageUrl: "https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg" },
    { id: 6, name: "Peak", title: "Outdoor Gear", imageUrl: "https://images.pexels.com/photos/20268746/pexels-photo-20268746.jpeg" },
    { id: 7, name: "Urban", title: "Street Wear", imageUrl: "https://images.pexels.com/photos/3764006/pexels-photo-3764006.jpeg" }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="mb-12 text-left">
        <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase italic">Top Brands</h2>
        <div className="h-2 w-24 bg-orange-500 mt-2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[800px]">
        
        {/* CARD 1: Vertical Long */}
        <div className="md:row-span-2 relative group overflow-hidden rounded-3xl">
          <img src={brands[0].imageUrl} alt={brands[0].name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
          <div className="absolute bottom-10 left-10 text-white">
            <h3 className="text-4xl font-bold">{brands[0].name}</h3>
            <p className="text-lg opacity-80">{brands[0].title}</p>
          </div>
        </div>

        {/* CARD 2: Horizontal Top */}
        <div className="md:col-span-2 relative group overflow-hidden rounded-3xl h-[250px] md:h-auto">
          <img src={brands[1].imageUrl} alt={brands[1].name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-3xl font-bold">{brands[1].name}</h3>
            <p className="text-md opacity-80">{brands[1].title}</p>
          </div>
        </div>

        {/* CARD 3 & 4: Middle Squares */}
        {[2, 3].map((index) => (
          <div key={brands[index].id} className="relative group overflow-hidden rounded-3xl h-[250px] md:h-auto">
            <img src={brands[index].imageUrl} alt={brands[index].name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
              <h3 className="text-2xl font-bold text-center">{brands[index].name}</h3>
              <p className="text-sm opacity-90 text-center">{brands[index].title}</p>
            </div>
          </div>
        ))}

        {/* CARD 5, 6, & 7: Bottom Squares */}
        {[4, 5, 6].map((index) => (
          <div key={brands[index].id} className="relative group overflow-hidden rounded-3xl h-[250px] md:h-auto border border-gray-100 shadow-sm">
            <img src={brands[index].imageUrl} alt={brands[index].name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
              <h3 className="text-xl font-bold tracking-widest uppercase">{brands[index].name}</h3>
              <p className="text-xs mt-1 uppercase tracking-tighter">{brands[index].title}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default TopBrands;