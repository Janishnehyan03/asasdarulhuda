const CarouselData = [
  {
    image: "/images/1.webp",
  },

  {
    image: "/images/2.webp",
  },

  {
    image: "/images/3.webp",
  },

  {
    image: "/images/4.webp",
  },
];

import React, { useEffect, useState } from "react";

function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setTimeout(
      () =>
        setCurrent((prevIndex) =>
          prevIndex === CarouselData.length - 1 ? 0 : prevIndex + 1
        ),
      10000
    );

    return () => {};
  }, [current]);

  return (
    <div id="container" className="h-[100vh] w-screen">
      {CarouselData.length > 0 ? (
        <>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url("/images/banner.jpg")`,
              // backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url("${CarouselData[current].image}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              width: "100%",
              backgroundAttachment: "fixed",
              position: "relative",
            }}
          >
            <div className="ml-6 absolute lg:max-w-[65%] bottom-[13%] lg:bottom-[30%]">
              <h1 className="text-white font-bold left-2 uppercase text-xl lg:text-[50px] lg:leading-[50px]">
                Al-Huda Students’ Association (ASAs)
              </h1>
              <p className="text-gray-400 mt-2">
                Al-Huda Students’ Association (ASAs) is the official
                organization of UG students of Darul Huda Islamic University.
                Upholding the true spirit of Darul Huda’s evergreen mission:
                learning for both world; ASAs acts as the arena for the
                betterment of growing generation, by conducting various
                programmes that aim at the full-fledged development of students.
              </p>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Carousel;
