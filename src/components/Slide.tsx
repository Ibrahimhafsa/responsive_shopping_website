import Image from "next/image";
import React from "react";

interface propsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slide: React.FC<propsType> = ({ img, title, mainTitle, price }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl shadow-2xl group transition-all duration-500 hover:shadow-pink-300/30">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-[1] group-hover:from-black/60 transition-all duration-500" />

      {/* Text Box */}
      <div className="absolute left-[25px] md:left-[80px] top-[50%] -translate-y-[50%] z-[2] text-white max-w-[350px] sm:max-w-[400px] space-y-3 md:space-y-5">
        
        <h3 className="text-pink-400 text-[22px] md:text-[26px] font-semibold tracking-wide drop-shadow-md uppercase">
          {title}
        </h3>

        <h2 className="text-[34px] md:text-[44px] lg:text-[56px] font-extrabold leading-tight bg-gradient-to-r from-pink-400 via-purple-400 to-violet-500 text-transparent bg-clip-text drop-shadow-md tracking-tight">
          {mainTitle}
        </h2>

        <h3 className="text-gray-200 text-[20px] md:text-[22px]">
          Starting at{" "}
          <b className="text-white text-[22px] md:text-[26px] lg:text-[30px]">
            {price}
          </b>
        </h3>

        <div className="mt-3 inline-block bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 text-white text-[15px] md:text-[17px] font-medium py-2.5 px-8 rounded-full shadow-lg cursor-pointer hover:scale-110 hover:shadow-violet-400/40 transition-all duration-300">
          Shop Now
        </div>
      </div>

      {/* Image */}
      <Image
        className="w-full h-[320px] md:h-[450px] lg:h-[560px] object-cover rounded-3xl group-hover:scale-105 transition-transform duration-700 ease-out"
        src={img}
        alt="banner"
        width={2000}
        height={2000}
      />
    </div>
  );
};

export default Slide;
