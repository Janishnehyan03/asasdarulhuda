import React from "react";

function Cards1() {
  const data = [
    {
      image: "/images/1.webp",
      text: "Title",
    },
    {
      image: "/images/2.webp",
      text: "Title",
    },
    {
      image: "/images/3.webp",
      text: "Title",
    },
    {
      image: "/images/4.webp",
      text: "Title",
    },
  ];
  return (
    <div className="bg-white ">
      <div className="text-center">
        <h2 className="text-lg font-semibold leading-8 text-indigo-600">
          Events
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Major Events
        </p>
      </div>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data.map((item, index) => (
            <a href="#" key={index} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={item.image}
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              {/* <h3 className="mt-4 text-sm text-gray-600">{item.text}</h3> */}
              {/* <p className="mt-1 text-lg font-medium text-indigo-600">$48</p> */}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards1;
