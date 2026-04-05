import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Code } from "lucide-react";

const ProjectSection = ({ title, projects, isEven }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    className: "gap-6",
    dotsClass: "slick-dots !bottom-[-2rem]",
  };

  return (
    <div className={`w-full py-16 ${isEven ? 'bg-[#172121]' : 'bg-[#151821]'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-thistle">
          {title} 💼
        </h2>
        
        <div className="relative px-4">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="px-3">
                <div className={`${isEven ? 'bg-[#151821]' : 'bg-[#1a1f2e]'} text-thistle p-8 rounded-lg shadow-xl h-full`}>
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`${isEven ? 'bg-[#252a3a]' : 'bg-[#2a303c]'} text-gray-300 px-3 py-1 text-sm rounded-full`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.links.code && (
                    <div className="flex gap-6">
                      <a
                        href={project.links.code}
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <Code size={16} />
                        <span>Code</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectCategories = {
    workExperience: {
      title: "Experience Highlights",
      projects: [
        {
          title: "AiRISTA - Senior Software Engineer (2023 - Present)",
          description: "Built React v18 + TypeScript + Next.js applications for real-time dashboards and internal SaaS platforms, developed GraphQL and API integrations, and delivered AI-powered workflows with OpenAI and RAG while improving frontend load times by 30%+.",
          tags: ["React", "TypeScript", "Next.js", "GraphQL", "Go", "Python", "OpenAI", "Kafka"],
          links: {},
        },
        {
          title: "TTEC - Senior Software Engineer (2020 - 2022)",
          description: "Delivered Angular and TypeScript applications for real-time voice translation and analytics, integrated streaming services over Kafka/WebRTC/gRPC, and built secure, high-performance frontends and backend services that improved latency and release speed.",
          tags: ["Angular", "TypeScript", "React", "Node.js", "Python", "Kafka", "WebRTC", "gRPC"],
          links: {},
        },
        {
          title: "Uber - Software Engineer (2013 - 2020)",
          description: "Built web applications and internal tools on GCP, created data and monitoring dashboards, and contributed to scalable microservice systems with Kubernetes and Terraform to support high-throughput, low-latency production environments.",
          tags: ["JavaScript", "React", "C#", "Java", "Go", "Python", "Kubernetes", "Terraform", "GCP"],
          links: {},
        },
        {
          title: "Education - University of Kent",
          description: "Bachelor of Computer Science (Aug 2009 - May 2013), graduated with a 3.8 GPA and a strong foundation in software engineering, systems design, and computer science fundamentals.",
          tags: ["Computer Science", "Bachelor's Degree", "GPA 3.8"],
          links: {},
        }
      ],
    },
  };

  return (
    <div className="flex flex-col w-full">
      {Object.entries(projectCategories).map(([key, category], index) => (
        <ProjectSection 
          key={key} 
          title={category.title} 
          projects={category.projects}
          isEven={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default Projects;
