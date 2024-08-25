"use client";
import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Payments System Landing Page",
    description: "This is a homepage design and build for a concept project – a payments system application.",
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/whitneyannete/PAYMENTS-LP",
    previewUrl: "https://github.com/whitneyannete/PAYMENTS-LP",
  },
  {
    id: 2,
    title: "Onboarding Template",
    description: "Onboaring Template with light mode and dark mode.It was converted from a Figma design using Html, Tailwind CSS and Javascript. ",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/whitneyannete/Onboarding-Light-and-dark-mode",
    previewUrl: "https://github.com/whitneyannete/Onboarding-Light-and-dark-mode",
  },
  {
    id: 3,
    title: "My Portfolio",
    description: "My Portfolio built in the Next.js Framework using Tailwind CSS and React Library.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/whitneyannete/Portfolio",
    previewUrl: "https://github.com/whitneyannete/Portfolio",
  },
];

const ProjectsSection = () => {
 return (
  <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (        
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
        ))}
      </div>
      </>
  );
};

export default ProjectsSection;
