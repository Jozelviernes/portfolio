export function Techstack() {
  const techs = [
    { name: "Html", imgSrc: "/html5.svg" },
    { name: "Css", imgSrc: "/css3.svg" },
    { name: "Javascript", imgSrc: "/javascript.svg" },
    { name: "Tailwind", imgSrc: "/tailwindcss.svg" },
    { name: "Bootstrap", imgSrc: "/bootstrap.svg" },
    { name: "ReactJS", imgSrc: "/react.svg" },
    { name: "PHP", imgSrc: "/php.svg" },
    { name: "MySQL", imgSrc: "/mysql.svg" },
  ];

  return (
    <section className="bg-white max-w-7xl mx-auto mt-9 py-8 sm:py-12 lg:py-15 px-4 sm:px-6 lg:px-7 mb-12 sm:mb-16 lg:mb-20 border border-gray-200 rounded-lg">
      <h1 className="text-xl sm:text-2xl lg:text-3xl text-center font-bold text-gray-800 underline decoration-violet-600 underline-offset-4 sm:underline-offset-6 lg:underline-offset-8 mb-6 sm:mb-8 lg:mb-9">
        My Tech Stack
      </h1>

      {/* ✅ same animation on mobile + desktop */}
      <div className="overflow-hidden relative">
        <div className="tech-marquee">
          {/* Track 1 */}
          <div className="tech-track">
            {techs.map((tech, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-3 mx-3 border-2 border-gray-300 px-4 py-3 rounded-lg hover:border-violet-400 transition-colors duration-300 whitespace-nowrap"
                data-aos="zoom-in"
                data-aos-delay={index * 80}
              >
                <img
                  src={tech.imgSrc}
                  alt={tech.name}
                  className="w-9 h-9 sm:w-10 sm:h-10"
                />
                <p className="text-base sm:text-lg lg:text-xl font-medium text-gray-800">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>

          {/* Track 2 duplicate (for seamless loop) */}
          <div className="tech-track" aria-hidden="true">
            {techs.map((tech, index) => (
              <div
                key={"dup-" + index}
                className="inline-flex items-center gap-3 mx-3 border-2 border-gray-300 px-4 py-3 rounded-lg hover:border-violet-400 transition-colors duration-300 whitespace-nowrap"
              >
                <img
                  src={tech.imgSrc}
                  alt={tech.name}
                  className="w-9 h-9 sm:w-10 sm:h-10"
                />
                <p className="text-base sm:text-lg lg:text-xl font-medium text-gray-800">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <p className="text-xs text-gray-500 mt-2 text-center sm:hidden">
        Auto scrolling…
      </p> */}
    </section>
  );
}
