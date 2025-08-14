import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import '../index.css'

export function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animate only once
    });
  }, []);

  return (
    <div className="w-full flex justify-center items-center mb-20 mt-40 px-4">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mt-9 max-w-6xl" id="about">
        
        {/* Text Content */}
        <div className="flex-col text-center lg:text-left order-2 lg:order-1">
          <h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3" 
            data-aos="zoom-in-up"
          >
            Jozel M. Viernes
          </h1>
          <h2 
            className="text-lg sm:text-xl lg:text-2xl text-violet-600 mb-5" 
            data-aos="zoom-in-up"
          >
            Full Stack Developer
          </h2>
          <p 
            className="text-base sm:text-lg lg:text-xl text-gray-500 max-w-md lg:max-w-3xl mb-6 lg:mb-5 mx-auto lg:mx-0" 
            data-aos="zoom-in-up"
          >
           
Welcome to my Portfolio! I'm a passionate full-stack developer who loves crafting beautiful, functional web experiences. From sleek front-end designs to  backend solutions, I bring ideas to life through code.
          </p>
          <button 
            className="px-6 py-3 bg-violet-600 rounded-xl border-0 text-gray-100 text-base lg:text-lg hover:bg-violet-800 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl" 
            data-aos="zoom-in-up"
          >
            Download CV
          </button>
        </div>

        {/* Profile Image */}
        <div className="order-1 lg:order-2">
          <img
            data-aos="zoom-in-up"
            src="../../public/jozel1.jpg"
            alt="Jozel M. Viernes"
            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full shadow-xl border-4 border-violet-400 shadow-violet-300 custom-shape object-cover"
          />
        </div>
        
      </div>
    </div>
  );
};