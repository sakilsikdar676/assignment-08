"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import img from "../../assest/logo.png";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleLogout = async () => {
    await authClient.signOut();
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-4">
          {/* 1. Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Image
              src={img} // Tomar assets folder e thaka logo path
              alt="SunCart"
              width={60}
              height={60}
            />
            <span className="text-2xl font-bold text-[#001529]">SunCart</span>
          </div>

          {/* 2. Search Bar (Hidden on very small screens, or full width on md) */}
          

          <div className="hidden md:flex justify-center pb-4">
            <ul className="flex items-center gap-10 text-gray-800 font-medium">
              <li>
                <Link href="/" className="hover:text-blue-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/all-products"
                  className="hover:text-blue-500 transition"
                >
                  All Products
                </Link>
              </li>

              <li>
                <Link
                  href="/profile"
                  className="hover:text-blue-500 transition"
                >
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Desktop Buttons & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {!user && (
              <div className="hidden md:flex items-center gap-3">
                <Link href="/login">
                  <button className="bg-[#4e31d4] text-white w-full btn rounded-lg font-semibold">
                    Login
                  </button>
                </Link>
                <Link href="/signup">
                  <button className="bg-[#794ebe] text-white w-full btn  rounded-lg font-semibold">
                    SignUp
                  </button>
                </Link>
              </div>
            )}
            {user && (
              <div className="hidden md:flex items-center gap-3">
                <Link href="/profile">
                  <div className="avatar">
                    <div className="w-11 rounded-full">
                      <img
                        src={user.image}
                        referrerPolicy="no-referrer"
                        alt="profile image"
                      />
                    </div>
                  </div>
                </Link>
                <button onClick={handleLogout} className="btn btn-error">Logout</button>
              </div>
            )}
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* 4. Desktop Navigation Links (Centered) */}
      {/* <div className="hidden md:flex justify-center pb-4">
          <ul className="flex items-center gap-10 text-gray-800 font-medium">
            <li>
              <Link href="/" className="hover:text-blue-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/all-products"
                className="hover:text-blue-500 transition"
              >
                All Products
              </Link>
            </li>

            <li>
              <Link href="/profile" className="hover:text-blue-500 transition">
                My Profile
              </Link>
            </li>
          </ul>
        </div>
      </div> */}

      {/* 5. Mobile Side Menu */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-2xl transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6 flex flex-col h-full">
          <button onClick={() => setIsOpen(false)} className="self-end mb-8">
            <FiX size={28} />
          </button>

          <ul className="flex flex-col gap-6 text-lg font-medium text-gray-800 mb-auto">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/all-products" onClick={() => setIsOpen(false)}>
                All Products
              </Link>
            </li>
            <li>
              <Link href="/profile" onClick={() => setIsOpen(false)}>
                My Profile
              </Link>
            </li>
          </ul>

          <div className="flex flex-col gap-3 mt-10">
            {!user && (
              <div className="flex flex-col gap-3">
                <Link href="/login">
                  <button className="bg-[#f1eded] text-black w-full py-3 rounded-lg font-semibold">
                    Login
                  </button>
                </Link>

                <Link href="/signup">
                  <button className="bg-[#231e2b] text-white w-full py-3 rounded-lg font-semibold">
                    SignUp
                  </button>
                </Link>
              </div>
            )}
            {user && (
              <div className="flex flex-col gap-3 mt-10">
                <button onClick={handleLogout} className="btn btn-error">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
