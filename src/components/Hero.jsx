import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24"
    >
      {/* ✅ Modern bubble background */}
      <div className="pointer-events-none absolute inset-0">
        {/* soft gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white/70" />

        {/* blurred color blobs (very subtle) */}
        <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />

        {/* bubbles */}
        <div className="absolute left-[8%] top-[18%] h-24 w-24 rounded-full bg-white/50 backdrop-blur-md ring-1 ring-white/40 shadow-sm" />
        <div className="absolute left-[18%] top-[55%] h-14 w-14 rounded-full bg-white/40 backdrop-blur-md ring-1 ring-white/40 shadow-sm" />
        <div className="absolute right-[12%] top-[20%] h-28 w-28 rounded-full bg-white/45 backdrop-blur-md ring-1 ring-white/40 shadow-sm" />
        <div className="absolute right-[22%] top-[52%] h-16 w-16 rounded-full bg-white/35 backdrop-blur-md ring-1 ring-white/40 shadow-sm" />
        <div className="absolute left-[45%] bottom-[10%] h-20 w-20 rounded-full bg-white/40 backdrop-blur-md ring-1 ring-white/40 shadow-sm" />

        {/* tiny dots for depth */}
        <div className="absolute left-[30%] top-[30%] h-2 w-2 rounded-full bg-violet-300/60" />
        <div className="absolute right-[34%] top-[38%] h-2 w-2 rounded-full bg-indigo-300/60" />
        <div className="absolute right-[18%] bottom-[22%] h-2 w-2 rounded-full bg-violet-300/60" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Text */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            {/* badge */}
            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-4 py-2 text-sm text-gray-600 shadow-sm backdrop-blur"
              data-aos="fade-up"
            >
              <span className="h-2 w-2 rounded-full bg-violet-500" />
              Available for freelance / remote work
            </div>

            <h1
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              Jozel M. Viernes
            </h1>

            <h2
              className="mt-3 text-base font-semibold text-violet-600 sm:text-lg lg:text-xl"
              data-aos="fade-up"
              data-aos-delay="140"
            >
              Full Stack Developer
            </h2>

            <p
              className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg lg:max-w-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              I build clean, user-friendly web apps—from modern UI to reliable backend systems.
              I enjoy turning ideas into working products with good design, performance, and
              maintainable code.
            </p>

            {/* CTA buttons */}
            <div
              className="mt-7 flex gap-4 justify-center sm:justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="260"
            >
              <a
                href="/Viernes_CV.png"
                download="Jozel_Viernes_CV.png"
                className="inline-flex items-center justify-center rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-violet-200 transition hover:bg-violet-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2"
              >
                Download CV
              </a>

              <a
                href="#contacts"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
              >
                Contact Me
              </a>
            </div>

            {/* quick highlights */}
            <div
              className="mt-8 grid grid-cols-3 gap-3 text-center lg:max-w-md lg:text-left"
              data-aos="fade-up"
              data-aos-delay="320"
            >
              <div className="rounded-xl border border-gray-200 bg-white/70 p-3 backdrop-blur">
                <p className="text-sm font-semibold text-gray-900">Full-stack</p>
                <p className="text-xs text-gray-600">End-to-end systems</p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white/70 p-3 backdrop-blur">
                <p className="text-sm font-semibold text-gray-900">UI/UX</p>
                <p className="text-xs text-gray-600">Clean design</p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white/70 p-3 backdrop-blur">
                <p className="text-sm font-semibold text-gray-900">Analytics</p>
                <p className="text-xs text-gray-600">Export-ready data</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative" data-aos="zoom-in-up" data-aos-delay="120">
              {/* ring glow */}
              <div className="absolute -inset-4 rounded-full bg-violet-200/40 blur-2xl" />

              <img
                src="/jozel1.jpg"
                alt="Jozel M. Viernes"
                className="relative h-64 w-64 rounded-full object-cover shadow-xl ring-4 ring-violet-300 sm:h-80 sm:w-80 lg:h-96 lg:w-96"
              />

              {/* small floating tag */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-gray-200 bg-white/90 px-4 py-2 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur">
                Modern web stacks
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
