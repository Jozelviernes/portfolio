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
    images: ["./ehr0.png", "./ehr1.png", "./ehr2.png"],
    techStack: [
      { name: "Laravel", imgSrc: "./laravel.svg" },
      { name: "mysql", imgSrc: "./mysql.svg" },
      { name: "tailwind", imgSrc: "./tailwindcss.svg" },
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
      { name: "reactjs", imgSrc: "./react.svg" },
      { name: "tailwindcss", imgSrc: "./tailwindcss.svg" },
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
      { name: "reactjs", imgSrc: "./react.svg" },
      { name: "supabase", imgSrc: "./supabase.png" },
      { name: "tailwindcss", imgSrc: "./tailwindcss.svg" },
    ],
  },
  {
    title: "Enrollment System (Techroll)",
    description:
      "Enrollment SystemDesigned and implemented a web-based enrollment system using PHP and MySQL to streamline student registration and subject enrollment processes. Key features include user authentication, specialization selection (Application Programming or Digital Design), admin approval workflows, and automated PDF report generation using mPDF. The system enhances administrative efficiency and improves student onboarding.",
    thumbnailSrc: "./techroll.png",
    images: ["./techroll.png", "./techroll1.png"],
    techStack: [
      { name: "php", imgSrc: "./php.svg" },
      { name: "mysql", imgSrc: "./mysql.svg" },
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
      { name: "mysql", imgSrc: "./mysql.svg" },
      { name: "Css", imgSrc: "./css3.svg" },
      { name: "Html", imgSrc: "./html5.svg" },
    ],
  },
  {
    title: "Capstone Generator Ideas",
    description:
      "Built a ReactJS application that uses the Groq API to generate innovative IT capstone project ideas, including titles, descriptions, and recommended tech stacks. Utilized axios for API integration and handled asynchronous data fetching with async/await in React. Check out the live ",
    thumbnailSrc: "./capstone-generator.png",
    liveLink: "https://innocapstone.vercel.app",
    images: ["./capstone-generator.png"],
    techStack: [
      { name: "reactjs", imgSrc: "./react.svg" },
      { name: "tailwind", imgSrc: "./tailwindcss.svg" },
    ],
  },
];

export function ProjectsSection() {
  const [carouselImages, setCarouselImages] = useState([]);
  const [open, setOpen] = useState(false);

  // ✅ NEW: track current slide index (next/back logic)
  const [currentSlide, setCurrentSlide] = useState(0);

  // ✅ track which cards are expanded (for "Read more")
  const [expanded, setExpanded] = useState({});

  // ✅ NEW: next/back logic using modulo
  const prevSlide = () => {
    setCurrentSlide(
      (p) => (p - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const nextSlide = () => {
    setCurrentSlide((p) => (p + 1) % carouselImages.length);
  };

  // ✅ OPTIONAL: keyboard controls
  useEffect(() => {
    if (!open || carouselImages.length === 0) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
      if (carouselImages.length > 1 && e.key === "ArrowLeft") prevSlide();
      if (carouselImages.length > 1 && e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, carouselImages.length]);

  return (
    <section className="max-w-7xl mx-auto p-4 sm:p-8" id="projects">
      <h2 className="text-3xl font-bold text-center underline decoration-violet-600 underline-offset-8 mb-9">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => {
          const isExpanded = !!expanded[idx];

          return (
            <div
              key={idx}
              className="border rounded-lg p-6 sm:p-10"
              data-aos="zoom-in-up"
            >
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="w-full"
                    onClick={() => {
                      setCarouselImages(project.images);
                      setCurrentSlide(0); // ✅ NEW: always start at first image
                      setOpen(true);
                    }}
                    aria-label={`Open images for ${project.title}`}
                  >
                    <img
                      src={project.thumbnailSrc}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded cursor-pointer"
                    />
                  </button>
                </DialogTrigger>

                <div className="mt-4">
                  {/* ✅ Prevent title overflow */}
                  <h3 className="text-xl font-semibold break-words">
                    {project.title}
                  </h3>

                  {/* ✅ Description: clamp on ALL screens */}
                  <p
                    className={[
                      "text-gray-600 mt-3 text-sm sm:text-base transition-all",
                      isExpanded
                        ? ""
                        : "line-clamp-3 sm:line-clamp-3 lg:line-clamp-4",
                    ].join(" ")}
                  >
                    {project.description}
                  </p>

                  {/* ✅ Read more / Show less (mobile + desktop) */}
                  <div className="mt-2">
                    <button
                      type="button"
                      onClick={() =>
                        setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }))
                      }
                      className="text-violet-600 text-sm font-medium hover:underline"
                    >
                      {isExpanded ? "Show less" : "Read more"}
                    </button>
                  </div>

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-blue-500 underline"
                    >
                      Live Preview
                    </a>
                  )}

                  <div className="flex flex-wrap gap-3 mt-4">
                    {project.techStack?.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 border-2 border-gray-300 px-3 py-2 rounded-lg max-w-full"
                      >
                        <img
                          src={tech.imgSrc}
                          alt={tech.name}
                          className="w-6 h-6 object-contain"
                        />
                        {/* ✅ Tech name ellipsis */}
                        <span className="text-sm text-gray-700 truncate max-w-[90px]">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
               
                <DialogContent
                  onCloseAutoFocus={(e) => e.preventDefault()}
                  className="
  !max-w-none p-0 border-none shadow-none
  w-screen h-screen sm:w-[85vw] sm:h-[75vh] lg:w-[60vw] lg:h-[60vh]
  bg-transparent
  flex items-center justify-center
"
                >
                   <VisuallyHidden>
    <DialogTitle>Project images preview</DialogTitle>
    <DialogDescription>
      Browse project screenshots using next and previous buttons.
    </DialogDescription>
  </VisuallyHidden>


                  <DialogClose asChild>
                    <button
                      className="
                        absolute top-4 right-4 z-50
                        rounded-full bg-white/90 p-2
                        text-gray-800 text-lg
                        shadow-md
                        hover:bg-white
                        focus:outline-none focus:ring-2 focus:ring-violet-400
                      "
                      aria-label="Close"
                    >
                      ✕
                    </button>
                  </DialogClose>

                  {/* ✅ UPDATED: one image only + next/back */}
                  <div className="relative flex items-center justify-center w-full">
                    {carouselImages.length > 0 && (
                      <img
                        src={carouselImages[currentSlide]}
                        alt={`Slide ${currentSlide + 1}`}
                        className="
                          max-w-[90vw] sm:max-w-[80vw] lg:max-w-[55vw]
                          max-h-[85vh] sm:max-h-[70vh] lg:max-h-[55vh]
                          object-contain
                        "
                      />
                    )}

                    {/* ✅ Show buttons only if multiple images */}
                    {carouselImages.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={prevSlide}
                          className="
                            absolute left-2 top-1/2 -translate-y-1/2 z-50
                            bg-white/90 hover:bg-white
                            rounded-full w-11 h-11
                            flex items-center justify-center
                            shadow-md
                          "
                          aria-label="Previous image"
                        >
                          ‹
                        </button>

                        <button
                          type="button"
                          onClick={nextSlide}
                          className="
                            absolute right-2 top-1/2 -translate-y-1/2 z-50
                            bg-white/90 hover:bg-white
                            rounded-full w-11 h-11
                            flex items-center justify-center
                            shadow-md
                          "
                          aria-label="Next image"
                        >
                          ›
                        </button>
                      </>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          );
        })}
      </div>
    </section>
  );
}
