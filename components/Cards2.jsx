import React from "react";
const CarouselData = [
  {
    image: "/images/6.webp",
  },
  {
    image: "/images/7.webp",
  },
  {
    image: "/images/8.webp",
  },
  {
    image: "/images/9.webp",
  },
  {
    image: "/images/10.webp",
  },
  {
    image: "/images/11.webp",
  },
];

function Cards2() {
  return (
    <>
      <div className="text-center ">
        <h2 className="text-lg font-semibold leading-8 text-indigo-600">
          Gallery
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Gallery
        </p>
      </div>
      <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
        <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
          {CarouselData.map((poster, index) => (
            <>
              <div
                className="bg-white rounded-2xl shadow-xl px-2 py-4 sm:px-12 lg:px-8 hover:shadow-2xl transition-shadow duration-300 group"
                key={index}
              >
                <img
                  src={poster.image}
                  className="w-full h-full object-cover"
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cards2;
