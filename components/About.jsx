import React from "react";

function About() {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800  pb-4">
            About Us
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600">
            Al-Huda Students’ Association (ASAs) is the official organization of
            UG students of Darul Huda Islamic University. Upholding the true
            spirit of Darul Huda’s evergreen mission: learning for both world;
            ASAs acts as the arena for the betterment of growing generation, by
            conducting various programmes that aim at the full-fledged
            development of students. In order to generate a highly-accomplished
            community of Islamic scholars who can take the mantle of this
            society, ASAs strives for academic excellence from grassroots level.
            Along with it, it also emphasizes on the co-curricular activities
            and skills which consist of social work, writing, speaking etc.
            paving the way for the multi facted developments without derailing
            from its established goals, ASAs was the foundation of real time.
            The presence of ASAs and its sincere contributions is palpable in
            the high-flying.
          </p>
        </div>

        <img
          className="w-80 h-80 rounded-[20px] mt-4 lg:mt-1"
          src="/images/logo1.jpg"
          alt="A group of People"
        />
      </div>
    </div>
  );
}

export default About;
