import React from "react";
import { FaSearch } from "react-icons/fa";
import { CiUser, CiHeart } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";

const HeaderMain = () => {
  return (
    <header className="border-b border-gray-200 py-5 bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-6">
        
        {/* 🌸 Brand Logo */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text 
          bg-gradient-to-r from-pink-500 to-purple-500 tracking-wide drop-shadow-sm hover:scale-105 transition-transform duration-300">
          Hafsa&apos;s Mart
        </h1>

        {/* 🔍 Search Bar */}
        <div className="relative w-full sm:w-[300px] md:w-[55%]">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full border border-gray-200 rounded-full py-2.5 pl-5 pr-10 shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300"
          />
          <FaSearch
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-pink-500 transition-colors duration-300 cursor-pointer"
          />
        </div>

        {/* 🛍️ Icons Section */}
        <div className="hidden lg:flex items-center gap-6 text-gray-600 text-[28px]">
          
          {/* User */}
          <div className="hover:text-pink-500 transition-colors duration-300 cursor-pointer">
            <CiUser />
          </div>

          {/* Wishlist */}
          <div className="relative hover:text-pink-500 transition-colors duration-300 cursor-pointer">
            <CiHeart />
            <span className="bg-pink-500 text-white text-[11px] rounded-full px-[5px] py-[1px] absolute -top-2 -right-2">
              0
            </span>
          </div>

          {/* Cart */}
          <div className="relative hover:text-pink-500 transition-colors duration-300 cursor-pointer">
            <LiaShoppingBagSolid />
            <span className="bg-pink-500 text-white text-[11px] rounded-full px-[5px] py-[1px] absolute -top-2 -right-2">
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
