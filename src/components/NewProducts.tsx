import React from 'react'
import ProductCard from './ProductCard';

const productsData =[
  {
  img:"/jacket1.jpg",
  title:"Jacket",
  desc:"Men Yarn Fleece Full-Zip Jacket",
  rating: 4,
  price: "65.00",
  },
  {
  img:"/jacket2.webp",
  title:"Jacket",
  desc:"Lightweight warmth, feminine fit",
  rating: 4,
  price: "65.00",
  },
  {
  img:"/skirt.jpg",
  title:"Skirt",
  desc:"Black Floral Wrap Skirt",
  rating: 5,
  price: "15.00",
  },
  {
  img:"/watch2.jpg",
  title:"Watches",
  desc:"Pocket Watch Leather Pouch",
  rating: 4,
  price: "120.00",
  },
  {
  img:"/party-wear.jpg",
  title:"Party Wear",
  desc:"Women's Party Wear Shoes",
  rating: 3,
  price: "22.00",
  },
  {
  img:"/shirt.jpg",
  title:"Shirt",
  desc:"Pure Garment Dyed Soft Shirt",
  rating: 4,
  price: "45.00",
  },
  {
  img:"/sports1.webp",
  title:"Sports",
  desc:"Trekking & Running Shoes - Black",
  rating: 3,
  price: "158.00",
  },
  {
  img:"/watch1.jpg",
  title:"Watches",
  desc:"Smart Watches Vital Plus",
  rating: 4,
  price: "100.00",
  },
 
];

const NewProducts = () => {
  return (
    <div>
      <div className='container pt-16'>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-8 relative inline-block after:content-[''] after:block after:w-20 after:h-[3px] after:bg-pink-500 after:mx-auto after:mt-2 ml-10">
  ✨ New <span className="text-pink-500">Products</span>
</h2>

        <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3
        xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
          {productsData.map((item,index) => (
            <ProductCard 
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            rating={item.rating}
            price={item.price}
            />
            ))}
          


        </div>


      </div>
    </div>
  )
}

export default NewProducts
