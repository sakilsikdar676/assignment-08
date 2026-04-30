import { FaStar } from "react-icons/fa6";

const DetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`https://assignment-08-sage.vercel.app/data.json`);
  const allData = await res.json();

  const product = allData.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-500 tracking-tighter">
          Product Not Found!
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 flex justify-center items-center ">
      <div className="relative group p-[3px] rounded-[30px] overflow-hidden w-full bg-gray-100 shadow-md">
        <div
          className="absolute inset-[-1000%] animate-spin"
          style={{
            background:
              "conic-gradient(from 0deg, #ff4545, #00ff99, #006aff, #ff00ff, #ff4545)",
            animationDuration: "4s",
          }}
        ></div>

        <div className="relative bg-white rounded-[27px] overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className=" flex items-center justify-center p-10 border-r border-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[450px] w-auto object-contain transition-transform duration-500 rounded-lg group-hover:scale-110"
            />
          </div>

          <div className="p-10 flex flex-col justify-center">
            <div className="mb-6">
              <div>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  {product.category}
                </span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ml-2">
                  {product.brand}
                </span>
              </div>
              <h1 className="text-4xl font-extrabold text-gray-900 mt-4 leading-tight uppercase">
                {product.product_name || product.name}
              </h1>
            </div>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-black text-gray-900">
                ${product.price}
              </span>
              <span className="text-lg text-gray-400 line-through tracking-tighter">
                $99.00
              </span>
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                {" "}
                In Stock - {product.stock}
              </span>
            </div>

            <p className="text-gray-500 text-lg leading-relaxed mb-8 border-l-4 border-blue-500 pl-4 italic">
              {product.description}
            </p>

            <div className="space-y-4">
              <button className="w-full bg-black text-white py-5 rounded-2xl font-bold text-xl hover:bg-gray-800 transition-all active:scale-95 shadow-xl">
                এখনই কিনুন (Order Now)
              </button>
            </div>

            <div className="mt-8 pt-6 border-t flex justify-between items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                🔒 100% Safe Payment
              </div>
              <div className="flex items-center gap-1">🚚 Fast Delivery</div>
              <div className="flex items-center gap-1 font-bold text-2xl"><FaStar className="text-yellow-400" />{product.rating}</div>
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin {
                    animation: spin 4s linear infinite;
                }
            `,
        }}
      />
    </div>
  );
};

export default DetailsPage;
