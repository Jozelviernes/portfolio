import { useEffect, useState } from "react";

const certificates = [
   {
    title: "Google SEO Fundamentals",
    image: "./google seo fundamentals.png",
  },
 {
    title: "Mastering Prompt Engineering",
    image: "./Mastering Prompt Engineering.png",
  },
  {
    title: "Full Stack Course - Angela Yu",
    image: "./Full stack Course - angela yu.jpg",
  },
  {
    title: "Hour of Code (DICT)",
    image: "./hour of code (dict).jpg",
  },
  {
    title: "Learn MySQL From Scratch (Data Science & Analytics)",
    image: "./learn mysql from scratch for data science and analytics.jpg",
  },
  {
    title: "React.JS Crash Course - Complete Course for Beginners",
    image: "./React.JS Crash Course - The Complete Course for Beginners.jpg",
  },
 
  {
    title: "Oracle Certified Foundations Associate",
    image: "./Oracle certfied foundations associate.png",
  },
 
];

export default function CertificatesSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const openModal = (index = 0) => {
    setCurrent(index);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  const prev = () =>
    setCurrent((p) => (p - 1 + certificates.length) % certificates.length);

  const next = () => setCurrent((p) => (p + 1) % certificates.length);

  // Keyboard: Esc close, arrows navigate
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <section id="certificates" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">Certificates</h2>

        {/* short text only */}
        <p className="text-gray-600 text-center mt-3">
          This is my certificates — click the image to view them all.
        </p>

        {/* one image preview */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => openModal(0)}
            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
            aria-label="Open certificates viewer"
          >
            <img
              src={certificates[0].image}
              alt="Certificates preview"
              className="w-[320px] sm:w-[420px] md:w-[520px] bg-white object-contain"
            />

            {/* hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition text-white font-medium px-4 py-2 rounded-full bg-black/40">
                Click to View
              </span>
            </div>
          </button>
        </div>

        {/* modal zoom viewer */}
        {isOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* close */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white/90 hover:text-white text-3xl"
                aria-label="Close"
              >
                ✕
              </button>

              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={certificates[current].image}
                  alt={certificates[current].title}
                  className="w-full max-h-[80vh] object-contain bg-white"
                />
              </div>

              {/* left/right buttons */}
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full w-11 h-11 flex items-center justify-center shadow-lg"
                aria-label="Previous certificate"
              >
                ‹
              </button>

              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full w-11 h-11 flex items-center justify-center shadow-lg"
                aria-label="Next certificate"
              >
                ›
              </button>

              {/* title + counter */}
              <div className="mt-3 text-center text-white/90 text-sm">
                {certificates[current].title} • {current + 1} /{" "}
                {certificates.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
