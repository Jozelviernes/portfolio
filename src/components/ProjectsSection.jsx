// ProjectsSection.js
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const projects = [
  {
    title: "eHR System – Human Resource Management & Employee Service Portal",
    description:
      "A web-based Human Resource Management System developed using Laravel, MySQL, and TailwindCSS for a local government unit. The system centralizes employee profiles, leave requests, deductions, service records, job postings, and reports into a secure, role-based platform. It streamlines HR operations, improves data accuracy, and supports data-driven decision-making through automated reports and analytics.",
    thumbnailSrc: "./ehr1.png",
    images: ["./hr1.png", "./hr2.png", "./hr3.png"],
    techStack: [
      { name: "Laravel", imgSrc: "./laravel.svg" },
      { name: "MySQL", imgSrc: "./mysql.svg" },
      { name: "Tailwind", imgSrc: "./tailwindcss.svg" },
    ],
  },
  {
    title: "Accounting Firm Website (ADAM Co.)",
    description:
      "Developed a modern, responsive website for a professional accounting firm to showcase its services, company values, and client engagement features. The project was paid work for students conducting their research, and includes an interactive contact form with serverless email handling, smooth section animations, and a clean, executive-style UI optimized for performance and accessibility.",
    thumbnailSrc: "./adam1.png",
    liveLink: "https://adamco.vercel.app/",
    images: ["./adam1.png", "./adam2.png", "./adam3.png"],
    techStack: [
      { name: "React", imgSrc: "./react.svg" },
      { name: "Tailwind", imgSrc: "./tailwindcss.svg" },
    ],
  },
  {
    title: "CleanPro",
    description:
      "CleanPro is a responsive cleaning services website that allows customers to browse available services, view pricing and details, and submit booking or inquiry requests through an interactive form. All requests are securely stored and managed through an admin-ready backend, helping service providers efficiently track and respond to customer inquiries.",
    thumbnailSrc: "./cleanpro1.png",
    liveLink: "https://cleanproweb.vercel.app/",
    images: ["./cleanpro1.png", "./cleanpro2.png", "./cleanpro3.png"],
    techStack: [
      { name: "React", imgSrc: "./react.svg" },
      { name: "Supabase", imgSrc: "./supabase.png" },
      { name: "Tailwind", imgSrc: "./tailwindcss.svg" },
    ],
  },
  {
    title: "Selah Solution",
    description:
      "Modern corporate website built for a business-focused brand with a strong emphasis on clean UI, responsiveness, SEO structure, and maintainable content management. Features a headless CMS integration for dynamic content updates and scalable page management.",
    thumbnailSrc: "./selah1.png",
    liveLink: "https://selahsolution.vercel.app/",
    images: ["./selah1.png", "./selah2.png", "./selah3.png"],
    techStack: [
      { name: "Next.js", imgSrc: "./nextjs.svg" },
      { name: "TypeScript", imgSrc: "./typescript.svg" },
      { name: "Tailwind", imgSrc: "./tailwindcss.svg" },
      { name: "Sanity CMS", imgSrc: "./sanity.svg" },
    ],
  },
  {
    title: "Xbox Gamertag Generator",
    description:
      "SEO-focused multi-page platform that generates Xbox gamertag ideas dynamically with optimized performance and scalable content structure. Built with a modern frontend architecture, API integrations, and server-side workflows to support high traffic and search engine visibility.",
    thumbnailSrc: "./xbox1.png",
    liveLink: "https://xboxgamertaggenerator.com",
    images: ["./xbox1.png", "./xbox2.png", "./xbox3.png"],
    techStack: [
      { name: "Astro", imgSrc: "./astro.svg" },
      { name: "Laravel", imgSrc: "./laravel.svg" },
      { name: "MySQL", imgSrc: "./mysql.svg" },
      { name: "Tailwind", imgSrc: "./tailwindcss.svg" },
    ],
  },
  {
    title: "Aurora Treasures",
    description:
      "Full-stack multi-vendor marketplace platform built to support and promote local products from Aurora Province, including crafts, coffee, produce, and artisanal goods. The platform includes vendor management, product listings, shopping cart functionality, secure checkout workflows, and responsive storefront experiences. Designed with scalability, clean UI/UX, and modern e-commerce architecture in mind.",
    thumbnailSrc: "./aurora1.png",
    liveLink: "https://aurora-treasures.vercel.app",
    images: ["./aurora1.png", "./aurora2.png", "./aurora3.png", "./aurora4.png", "./aurora5.png"],
    techStack: [
      { name: "Next.js", imgSrc: "./nextjs.svg" },
      { name: "TypeScript", imgSrc: "./typescript.svg" },
      { name: "Tailwind", imgSrc: "./tailwindcss.svg" },
      { name: "Supabase", imgSrc: "./supabase.png" },
      { name: "Stripe", imgSrc: "./stripe.svg" },
    ],
  },
  {
    title: "Enrollment System (Techroll)",
    description:
      "Designed and implemented a web-based enrollment system using PHP and MySQL to streamline student registration and subject enrollment processes. Key features include user authentication, specialization selection (Application Programming or Digital Design), admin approval workflows, and automated PDF report generation using mPDF. The system enhances administrative efficiency and improves student onboarding.",
    thumbnailSrc: "./techroll.png",
    images: ["./techroll.png", "./techroll1.png"],
    techStack: [
      { name: "PHP", imgSrc: "./php.svg" },
      { name: "MySQL", imgSrc: "./mysql.svg" },
    ],
  },
  {
    title: "ASCOT Scholarship Management System",
    description:
      "Developed a desktop Student Scholarship Management System using Java Swing and MySQL. The system manages student records and scholarship assignments with real-time updates, automated tracking of scholarship slots, and search/filter functions for efficient data retrieval. This project highlights skills in Java GUI development and database management.",
    thumbnailSrc: "./scholarship1.png",
    images: ["./scholarship.png", "./scholarship1.png", "./scholarship2.png"],
    techStack: [
      { name: "Java", imgSrc: "./java.svg" },
      { name: "MySQL", imgSrc: "./mysql.svg" },
      { name: "CSS", imgSrc: "./css3.svg" },
      { name: "HTML", imgSrc: "./html5.svg" },
    ],
  },
  {
    title: "Capstone Generator Ideas",
    description:
      "Built a ReactJS application that uses the Groq API to generate innovative IT capstone project ideas, including titles, descriptions, and recommended tech stacks. Utilized axios for API integration and handled asynchronous data fetching with async/await in React.",
    thumbnailSrc: "./capstone-generator.png",
    liveLink: "https://innocapstone.vercel.app",
    images: ["./capstone-generator.png"],
    techStack: [
      { name: "React", imgSrc: "./react.svg" },
      { name: "Tailwind", imgSrc: "./tailwindcss.svg" },
    ],
  },
];

export function ProjectsSection() {
  const [modalState, setModalState] = useState({
    open: false,
    images: [],
    currentSlide: 0,
  });

  const [expanded, setExpanded] = useState({});

  const { open, images, currentSlide } = modalState;

  const openModal = (projectImages) => {
    setModalState({ open: true, images: projectImages, currentSlide: 0 });
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, open: false }));
  };

  const prevSlide = () => {
    setModalState((prev) => ({
      ...prev,
      currentSlide: (prev.currentSlide - 1 + prev.images.length) % prev.images.length,
    }));
  };

  const nextSlide = () => {
    setModalState((prev) => ({
      ...prev,
      currentSlide: (prev.currentSlide + 1) % prev.images.length,
    }));
  };

  useEffect(() => {
    if (!open || images.length === 0) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (images.length > 1 && e.key === "ArrowLeft") prevSlide();
      if (images.length > 1 && e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, images.length]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12" id="projects">
      <h2 className="text-3xl font-bold text-center underline decoration-violet-600 underline-offset-8 mb-10">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => {
          const isExpanded = !!expanded[idx];

          return (
            <div
              key={idx}
              className="border border-gray-200 rounded-xl p-5 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200 bg-white"
              data-aos="zoom-in-up"
            >
              {/* ── Thumbnail ── */}
              <button
                type="button"
                className="w-full overflow-hidden rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-400 group"
                onClick={() => openModal(project.images)}
                aria-label={`View images for ${project.title}`}
              >
                {/* object-contain so the full screenshot is always visible */}
                <img
                  src={project.thumbnailSrc}
                  alt={project.title}
                  className="w-full h-48 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </button>

              {/* ── Content ── */}
              <div className="flex flex-col gap-3 flex-1">
                <h3 className="text-base font-semibold leading-snug break-words">
                  {project.title}
                </h3>

                <p
                  className={[
                    "text-gray-500 text-sm leading-relaxed transition-all",
                    isExpanded ? "" : "line-clamp-3",
                  ].join(" ")}
                >
                  {project.description}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }))
                  }
                  className="self-start text-violet-600 text-xs font-medium hover:underline"
                >
                  {isExpanded ? "Show less" : "Read more"}
                </button>

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-500 hover:text-blue-700 font-medium w-fit"
                  >
                    Live Preview
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}

                {/* ── Tech Stack ── */}
                <div className="flex flex-wrap gap-2 mt-auto pt-1">
                  {project.techStack?.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-1.5 border border-gray-200 bg-gray-50 px-2.5 py-1.5 rounded-lg"
                    >
                      <img
                        src={tech.imgSrc}
                        alt={tech.name}
                        className="w-4 h-4 object-contain"
                      />
                      <span className="text-xs text-gray-600 font-medium">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Modal ── */}
      <Dialog open={open} onOpenChange={(val) => !val && closeModal()}>
        <DialogContent
          onCloseAutoFocus={(e) => e.preventDefault()}
          className="
            !max-w-none p-0 border-none shadow-none
            w-screen h-screen
            bg-black/80 backdrop-blur-sm
            flex items-center justify-center
          "
        >
          <VisuallyHidden>
            <DialogTitle>Project image preview</DialogTitle>
            <DialogDescription>
              Browse project screenshots using the next and previous buttons or arrow keys.
            </DialogDescription>
          </VisuallyHidden>

          {/* Close button */}
          <button
            onClick={closeModal}
            className="
              absolute top-4 right-4 z-50
              w-9 h-9 rounded-full
              bg-white/10 hover:bg-white/20
              border border-white/20
              text-white
              flex items-center justify-center
              transition-colors duration-150
              focus:outline-none focus:ring-2 focus:ring-white/50
            "
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Slide counter */}
          {images.length > 1 && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-black/40 text-white text-xs px-3 py-1 rounded-full border border-white/10">
              {currentSlide + 1} / {images.length}
            </div>
          )}

          {/* Image */}
          <div className="relative flex items-center justify-center w-full h-full px-16">
            {images.length > 0 && (
              <img
                key={currentSlide}
                src={images[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className="
                  max-w-[85vw] sm:max-w-[78vw] lg:max-w-[70vw]
                  max-h-[80vh]
                  object-contain
                  rounded-lg shadow-2xl
                "
              />
            )}
          </div>

          {/* Prev / Next buttons */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={prevSlide}
                className="
                  absolute left-4 top-1/2 -translate-y-1/2 z-50
                  w-10 h-10 rounded-full
                  bg-white/10 hover:bg-white/20
                  border border-white/20
                  text-white
                  flex items-center justify-center
                  transition-colors duration-150
                  focus:outline-none focus:ring-2 focus:ring-white/50
                "
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className="
                  absolute right-4 top-1/2 -translate-y-1/2 z-50
                  w-10 h-10 rounded-full
                  bg-white/10 hover:bg-white/20
                  border border-white/20
                  text-white
                  flex items-center justify-center
                  transition-colors duration-150
                  focus:outline-none focus:ring-2 focus:ring-white/50
                "
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </>
          )}

          {/* Dot indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() =>
                    setModalState((prev) => ({ ...prev, currentSlide: i }))
                  }
                  aria-label={`Go to image ${i + 1}`}
                  className={[
                    "rounded-full transition-all duration-200 focus:outline-none",
                    i === currentSlide
                      ? "w-5 h-2 bg-white"
                      : "w-2 h-2 bg-white/40 hover:bg-white/60",
                  ].join(" ")}
                />
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}