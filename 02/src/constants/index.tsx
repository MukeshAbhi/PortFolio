import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
  RiGithubLine,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Mukesh Papanna",
  role: "Full Stack Developer",
  subheading:
    "Aspiring full-stack developer with a strong passion for building clean, functional web applications. Actively learning and open to collaborating on meaningful projects to grow my skills.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Weather App",
    description:
      "A Chrome extension built using rect and 3rd party Api.",
    techStack: ["React", "Node.js"],
    imgSrc: project1,
    link: "https://example-ecommerce.com",
  },
  {
    id: 2,
    title: "Social Media App",
    description:
      "A real-time social media app with chat, and a customizable profile page. Built with React, MongoDB, and Recoil for state management.",
    techStack: ["React","Tailwind CSS" , "Express", "MongoDB", "Recoil", "TypeScript"],
    imgSrc: project2,
    link: "https://example-socialapp.com",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance.",
    techStack: ["React", "Tailwind CSS"],
    imgSrc: project3,
    link: "https://myportfolio.com",
  },
  {
    id: 4,
    title: "Chat App",
    description:
      "A blogging platform with a content management system, user authentication, and an intuitive editor.",
    techStack: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS"],
    imgSrc: project4,
    link: "https://example-blogplatform.com",
  }
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "Git",
    icon: <RiGithubLine className="text-pink-400" />,
  }
];



export const EDUCATION = [
  {
    id: 1,
    degree: "CS50x: Introduction to Computer Science",
    institution: "Harvard University",
    duration: "2024",
    description:
      "Completed Harvard's CS50x, an intensive introduction to computer science taught by David J. Malan. Covered foundational topics such as algorithms, data structures, web development, and programming in C, Python, and JavaScript."
  },
  {
    id: 2,
    degree: "Bachelor of Commerce",
    institution: "Bangalore University",
    duration: "2019 - 2022",
    description:
      "Completed a comprehensive business-focused curriculum, developing analytical and problem-solving skills. My growing interest in software development began during this time, leading me to pursue full-stack web development independently."
  },
];

