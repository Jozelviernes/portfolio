export function Techstack() {
  const techs = [
    {
      name: "Html",
      imgSrc: "../../public/html5.svg",
    },
    {
      name: "Css",
      imgSrc: "../../public/css3.svg"
    }, {
      name: "Javascript",
      imgSrc: "../../public/javascript.svg"
    }, {
      name: "Tailwind",
      imgSrc: "../../public/tailwindcss.svg"
    }, {
      name: "Bootstrap",
      imgSrc: "../../public/bootstrap.svg"
    }, {
      name: "ReactJS",
      imgSrc: "../../public/react.svg"
    }, {
      name: "PHP",
      imgSrc: "../../public/php.svg"
    }, {
      name: "MySQL",
      imgSrc: "../../public/mysql.svg"
    }
  ];

  return (
    <section className="bg-white max-w-7xl mx-auto mt-9 py-8 sm:py-12 lg:py-15 px-4 sm:px-6 lg:px-7 mb-12 sm:mb-16 lg:mb-20 border border-gray-200 rounded-lg">
      
      {/* Title */}
      <h1 className="text-xl sm:text-2xl lg:text-3xl text-center font-bold text-gray-800 underline decoration-violet-600 underline-offset-4 sm:underline-offset-6 lg:underline-offset-8 mb-6 sm:mb-8 lg:mb-9">
        My Tech Stack
      </h1>

      {/* Mobile Grid Layout (below sm) */}
      <div className="grid grid-cols-2 gap-3 sm:hidden">
        {techs.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 border-2 border-gray-300 p-3 rounded-lg hover:border-violet-400 transition-colors duration-300"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img src={tech.imgSrc} alt={tech.name} className="w-8 h-8" />
            <p className="text-sm text-center font-medium">{tech.name}</p>
          </div>
        ))}
      </div>

      {/* Tablet Grid Layout (sm to lg) */}
      <div className="hidden sm:grid lg:hidden grid-cols-4 gap-4">
        {techs.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 border-2 border-gray-300 p-4 rounded-lg hover:border-violet-400 transition-colors duration-300"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img src={tech.imgSrc} alt={tech.name} className="w-10 h-10" />
            <p className="text-base text-center font-medium">{tech.name}</p>
          </div>
        ))}
      </div>

      {/* Desktop Scrolling Animation (lg and above) */}
      <div className="hidden lg:block overflow-hidden relative">
        <div className="tech-scroll whitespace-nowrap animate-slideRight">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-3 mx-3 border-2 border-gray-300 p-3 rounded-lg hover:border-violet-400 transition-colors duration-300"
              data-aos="zoom-in"
            >
              <img src={tech.imgSrc} alt={tech.name} className="w-10 h-8" />
              <p className="text-xl font-medium">{tech.name}</p>
            </div>
          ))}

          {/* Duplicate the items for smooth infinite scroll */}
          {techs.map((tech, index) => (
            <div
              key={"dup-" + index}
              className="inline-flex items-center gap-3 mx-3 border-2 border-gray-300 p-3 rounded-lg hover:border-violet-400 transition-colors duration-300"
            >
              <img src={tech.imgSrc} alt={tech.name} className="w-10 h-8" />
              <p className="text-xl font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}