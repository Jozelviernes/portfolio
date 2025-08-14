// ProjectsSection.js
import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const projects = [
  {
    title: "Enrollment System (Techroll)",
    description: "Enrollment SystemDesigned and implemented a web-based enrollment system using PHP and MySQL to streamline student registration and subject enrollment processes. Key features include user authentication, specialization selection (Application Programming or Digital Design), admin approval workflows, and automated PDF report generation using mPDF. The system enhances administrative efficiency and improves student onboarding.",
    thumbnailSrc: "../../public/techroll.png",
    images: ["../../public/techroll.png", "../../public/techroll1.png"],
      techStack:[{ name:"php",
        imgSrc:"../../public/php.svg"
    },{
         name:"mysql",
        imgSrc:"../../public/mysql.svg"
    }]
  },
  {
    title: "ASCOT Scholarship Management System",
    description: "Developed a desktop Student Scholarship Management System using Java Swing and MySQL. The system manages student records and scholarship assignments with real-time updates, automated tracking of scholarship slots, and search/filter functions for efficient data retrieval. This project highlights skills in Java GUI development and database management.",
    thumbnailSrc: "../../public/scholarship1.png",
    images: ["../../public/scholarship.png", "../../public/scholarship1.png", "../../public/scholarship2.png"],
      techStack:[{ name:"Java",
        imgSrc:"../../public/java.svg"
    },{
         name:"mysql",
        imgSrc:"../../public/mysql.svg"
    },{
         name:"Css",
        imgSrc:"../../public/css3.svg"
    },{
         name: "Html",
      imgSrc: "../../public/html5.svg",
    }]
  },
  {
    title: "Capstone Generator Ideas",
    description: "Built a ReactJS application that uses the Groq API to generate innovative IT capstone project ideas, including titles, descriptions, and recommended tech stacks. Utilized axios for API integration and handled asynchronous data fetching with async/await in React. Check out the live ",
    thumbnailSrc: "../../public/capstone-generator.png",
    liveLink: "https://innocapstone.vercel.app",
    images: ["../../public/capstone-generator.png"],
    techStack:[{   name:"reactjs",
        imgSrc:"../../public/react.svg"
    },{
             name:"tailwind",
        imgSrc:"../../public/tailwindcss.svg"
    }]
  },
];

export function ProjectsSection() {
  const [carouselImages, setCarouselImages] = useState([]);
  const [open, setOpen] = useState(false);

  return (
    <section className="max-w-7xl mx-auto p-8" id="projects">
      <h2 className="text-3xl font-bold text-center mb-8 underline decoration-violet-600 underline-offset-8 mb-9">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" >
        {projects.map((project, idx) => (
          <div key={idx} className="border rounded-lg p-10 "  data-aos="zoom-in-up">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <img
                  src={project.thumbnailSrc}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded cursor-pointer"
                  onClick={() => {
                    setCarouselImages(project.images);
                    setOpen(true);
                  }}
                />
              </DialogTrigger>

              <div className="mt-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600 mt-4">{project.description}</p>
  {project.liveLink && (
      <a
        href={project.liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        Live Preview
      </a>
    )}
           <div className="flex flex-wrap gap-4 mt-4">
        {project.techStack && project.techStack.map((tech) => (
          <div key={tech.name} className="flex items-center gap-2 border-2 border-gray-300 p-2 rounded-lg">
            <img
              src={tech.imgSrc}
              alt={tech.name}
              className="w-6 h-6 object-contain"
            />
            <span className="text-sm text-gray-700">{tech.name}</span>
          </div>
        ))}
      </div>
              </div>
              
<DialogContent
  className="!max-w-none w-[60vw] max-h-[60vh] p-0 flex items-center justify-center mx-auto my-auto"
>
  <Carousel opts={{ loop: true }} className="w-full h-full">
    <CarouselContent className="h-full">
      {carouselImages.map((src, i) => (
        <CarouselItem
          key={i}
          className="flex justify-center items-center "
        >
          <img
            src={src}
            alt={`Slide ${i + 1}`}
            className="w-auto h-full object-contain rounded"
          />
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</DialogContent>




            </Dialog>
          </div>
        ))}
      </div>
    </section>
  );
}
