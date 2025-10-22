import React from "react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-8 relative inline-block after:content-[''] after:block after:w-24 after:h-[3px] after:bg-pink-500 after:mx-auto after:mt-2 ml-6">
  💬 Our <span className="text-pink-500">Testimonials</span>
</h2>
      
      {/* Main Grid */}
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side: Testimonial Card */}
        <div className="bg-gradient-to-b from-white to-pink-50 border border-pink-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 flex flex-col items-center text-center scale-100 hover:scale-[1.02]">
  <Image
    src="/user1.jpg"
    alt="testimonial user"
    width={90}
    height={90}
    className="rounded-full mb-4 border-4 border-pink-200 shadow-md"
  />
  <h3 className="text-gray-800 font-extrabold text-xl tracking-wide">
    Hafsa Ibrahim
  </h3>
  <p className="text-pink-500 font-medium text-sm mb-4">
    CEO & Founder, Invision
  </p>
  <p className="text-gray-600 italic leading-relaxed max-w-[280px]">
    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem non sed magnam
    consequatur ipsam perspiciatis. Lorem ipsum dolor sit.”
  </p>

  {/* Decorative accent line */}
  <div className="mt-5 w-16 h-[3px] bg-pink-400 rounded-full"></div>
</div>


        {/* Right Side: Discount Banner */}
        <div className="relative bg-[url('/cta-banner.jpg')] bg-cover bg-center h-[450px] rounded-2xl overflow-hidden shadow-lg">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>

          {/* Content Box */}
          <div className="relative z-10 h-full w-full flex items-center justify-center">
            <div className="bg-white/70 backdrop-blur-xs rounded-xl p-8 text-center flex flex-col items-center gap-4 max-w-[400px] shadow-md">
              <button className="border-2 border-pink-500 text-pink-600 px-6 py-2 rounded-full uppercase font-semibold tracking-wide hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-pink-200">
            25% Discount
              </button>
              <h2 className="font-extrabold text-2xl text-[#272727]">
                Summer Collection
              </h2>
              <p className="text-gray-700 text-1xl text-lg">
                Starting @ $20{" "}
                <b className="text-gray-900 hover:text-pink-500 cursor-pointer transition">
                  Shop Now
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
