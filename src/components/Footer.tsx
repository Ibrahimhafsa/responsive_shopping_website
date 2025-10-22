import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-16 pb-10 px-6 md:px-20">
      {/* Top Section */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 pb-10 border-b border-gray-300">
        
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-3xl font-bold text-gray-800">Hafsa&apos;s Mart</h2>
          </div>
          <p className="text-gray-600 leading-6">
            Discover the latest trends in fashion, style, and beauty with Hafsa&apos;s Mart. 
            Where comfort meets elegance 💖
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="hover:text-pink-500 cursor-pointer">Home</li>
            <li className="hover:text-pink-500 cursor-pointer">Shop</li>
            <li className="hover:text-pink-500 cursor-pointer">About</li>
            <li className="hover:text-pink-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="hover:text-pink-500 cursor-pointer">FAQs</li>
            <li className="hover:text-pink-500 cursor-pointer">Shipping & Returns</li>
            <li className="hover:text-pink-500 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-pink-500 cursor-pointer">Terms of Service</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Join Our Newsletter</h3>
          <p className="text-gray-600 mb-3">
            Subscribe to get updates on new arrivals and special offers 💌
          </p>
          <div className="flex items-center bg-white rounded-full overflow-hidden border border-gray-300">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full focus:outline-none"
            />
            <button className="bg-pink-500 text-white px-4 py-2 hover:bg-pink-600 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8">
        {/* Social Icons */}
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-pink-500 hover:text-white transition-all">
            <FaFacebookF />
          </a>
          <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-pink-500 hover:text-white transition-all">
            <FaInstagram />
          </a>
          <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-pink-500 hover:text-white transition-all">
            <FaTwitter />
          </a>
          <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-pink-500 hover:text-white transition-all">
            <FaPinterestP />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600 text-center md:text-right">
          © {new Date().getFullYear()} <b className="text-pink-500 font-sans text-[20px]">Coded by Hafsa Ibrahim</b> <br/>— All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
