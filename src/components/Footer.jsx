import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Mail, Phone, MapPin } from "lucide-react";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import img from "../../assest/footer-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#001529] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-center">
          
            {/* 1. Logo & Brand Summary */}
            <div className="space-y-4">
              <div className="flex justify-center items-center gap-2">
                <Image
                  src={img}
                  alt="SunCart Logo"
                  width={200}
                  height={200}
                  className="brightness-0 invert" // Logo white korar jonno
                />
                {/* <span className="text-2xl font-bold tracking-tight">SunCart</span> */}
              </div>

              {/* Social Links */}
              <div className="flex  justify-center gap-4 pt-2">
                <a
                  href="#"
                  className="p-2 bg-white/10 rounded-full hover:bg-blue-600 transition-colors"
                >
                  <MdFacebook size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/10 rounded-full hover:bg-blue-400 transition-colors"
                >
                  <FaTwitter size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/10 rounded-full hover:bg-pink-600 transition-colors"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/10 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>

            {/* 2. Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-blue-400 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="hover:text-blue-400 transition"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/apparel"
                    className="hover:text-blue-400 transition"
                  >
                    Apparel
                  </Link>
                </li>
                <li>
                  <Link
                    href="/accessories"
                    className="hover:text-blue-400 transition"
                  >
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>
          

          
            {/* 3. Privacy & Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Privacy Policy</h3>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-blue-400 transition"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-blue-400 transition"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/return"
                    className="hover:text-blue-400 transition"
                  >
                    Return Policy
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="hover:text-blue-400 transition">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>

            {/* 4. Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <ul className="space-y-4 text-gray-400 ">
                <li className="flex  justify-center items-start gap-3">
                  <MapPin size={20} className="text-blue-500 mt-1 shrink-0" />
                  <span>Kushtia, Bangladesh</span>
                </li>
                <li className="flex items-center justify-center gap-3">
                  <Phone size={20} className="text-blue-500 shrink-0" />
                  <span>+880 13 1820 6621</span>
                </li>
                <li className="flex items-center justify-center gap-3">
                  <Mail size={20} className="text-blue-500 shrink-0" />
                  <span>masrurali51@gmail.com</span>
                </li>
              </ul>
            </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2026 SunCart. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Designed with ❤️ by Masrur</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
