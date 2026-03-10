import { Github, Twitter, Figma } from "lucide-react";

// Project Images
import ProjectWingie from "/public/images/project-wingie.png";
import ProjectFliski from "/public/images/project-fiskil.png";
import ProjectPepehousing from "/public/images/project-pepehousing.png";

// Avatars
import AvatarDummy from "/public/images/avatar-dummy.svg";

// Technology Logos
import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoExpressLight from "/public/images/logos/icon-express-light.svg";
import LogoNest from "/public/images/logos/icon-nest.svg";

import LogoSocket from "/public/images/logos/icon-socket.svg";
import LogoSocketLight from "/public/images/logos/icon-socket-light.svg";
import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoCypress from "/public/images/logos/icon-cypress.svg";
import LogoCypressLight from "/public/images/logos/icon-cypress-light.svg";
import LogoStorybook from "/public/images/logos/icon-storybook.svg";
import LogoGit from "/public/images/logos/icon-git.svg";

// Experience/Company Logos
import LogoYns from "/public/images/logos/logo-yns.png";
import LogoDaztech from "/public/images/logos/logo-daztech.jpg";
import LogoAlgo3 from "/public/images/logos/logo-algo3.jpg";
import {
  ExperienceDetails,
  FAQItem,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/shahzad-iqbal5068",
  GITHUB_REPO: "https://github.com/shahzad-iqbal5068",
  TWITTER: "https://twitter.com/shahzad_iqbal5068",
  FIGMA: "https://www.figma.com/@shahsagarm",
  FIGMA_FILE:
    "https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop",
};

export const CONTACT_INFO = {
  email: "choudhuryshahzad5068@gmail.com",
  phone: "+92 3247228356",
  location: "Islamabad, Pakistan",
};

export const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export const SOCIAL_LINKS = [
  { icon: Github, url: EXTERNAL_LINKS.GITHUB },
  { icon: Twitter, url: EXTERNAL_LINKS.TWITTER },
  { icon: Figma, url: EXTERNAL_LINKS.FIGMA },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  { label: "React", logo: LogoReact, url: "https://react.dev/" },
  { label: "Next.js", logo: LogoNextjs, url: "https://nextjs.org/" },
  { label: "Node.js", logo: LogoNodejs, url: "https://nodejs.org/en" },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  { label: "Nest.js", logo: LogoNest, url: "https://nestjs.com/" },
  {
    label: "Socket.io",
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: "https://socket.io/",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  { label: "MongoDB", logo: LogoMongoDB, url: "https://www.mongodb.com/" },
  { label: "Sass/Scss", logo: LogoSass, url: "https://sass-lang.com/" },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  { label: "Figma", logo: LogoFigma, url: "https://www.figma.com/" },
  {
    label: "Cypress",
    logo: LogoCypress,
    darkModeLogo: LogoCypressLight,
    url: "https://www.cypress.io/",
  },
  { label: "Storybook", logo: LogoStorybook, url: "https://storybook.js.org/" },
  { label: "Git", logo: LogoGit, url: "https://git-scm.com/" },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    slug: "yns-systems",
    companyName: "Yns Systems",
    logo: LogoYns,
    logoAlt: "logo yns",
    position: "React Js Developer",
    startDate: new Date(2025, 7), // August 2025
    endDate: new Date(2026, 1), // February 2026
    currentlyWorkHere: true,
    summary: [
      "Built and managed dynamic user interfaces using React.js, focusing on component-based architecture and reusable UI elements.",
      "Integrated RESTful APIs and managed application state using tools like React Context and Redux for scalable frontend applications.",
      "Practiced version control using Git, collaborated via GitHub, and applied basic CI/CD workflows for front-end deployment.",
    ],
    fullDescription:
      "At Yns Systems, I work as a React.js Developer building responsive web applications. I focus on component-based architecture, state management with Redux, and integrating RESTful APIs. I collaborate with cross-functional teams using Git and Agile methodologies.",
    challenges: [
      "Managing complex state across multiple components",
      "Optimizing performance for large-scale applications",
      "Integrating third-party APIs with consistent error handling",
    ],
    technologies: ["React", "TypeScript", "Redux", "Git", "REST APIs"],
  },
  {
    slug: "daztech",
    companyName: "Daztech",
    logo: LogoDaztech,
    logoAlt: "Daztech logo",
    position: "Devops & System Trainee",
    startDate: new Date(2025, 5), // June 2025
    endDate: new Date(2025, 7), // August 2025
    currentlyWorkHere: false,
    summary: [
      "Managed Linux environments and AWS services (EC2, S3, IAM) while supporting VM-based clusters and Kubernetes fundamentals.",
      "Developed and maintained CI/CD pipelines using Git and GitHub Actions/Jenkins, leveraging Bash scripting for task automation.",
      "Containerized applications via Docker and improved system reliability through proactive monitoring, log analysis, and troubleshooting.",
    ],
    fullDescription:
      "As a DevOps & System Trainee at Daztech, I gained hands-on experience with cloud infrastructure, CI/CD pipelines, and containerization. I worked with AWS, Docker, Kubernetes, and automation tools to maintain reliable system operations.",
    challenges: [
      "Learning Kubernetes orchestration in production environments",
      "Debugging pipeline failures across multiple environments",
      "Balancing security with deployment speed",
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "Bash", "Linux"],
  },
  {
    slug: "algo3",
    companyName: "Algo 3",
    logo: LogoAlgo3,
    logoAlt: "Algo3 logo",
    position: "Mern Stack Web Developer",
    startDate: new Date(2024, 0), // January 2024
    endDate: new Date(2025, 5), // June 2025
    currentlyWorkHere: false,
    summary: [
      "Developed full-stack web applications using JavaScript, React.js, Next.js, and TypeScript to build responsive UIs.",
      "Built and integrated secure RESTful APIs using Node.js, Express.js, and MongoDB for efficient backend services.",
      "Implemented user authentication, state management, and integrated external APIs such as OpenWeather and GitHub.",
    ],
    fullDescription:
      "At Algo 3, I worked as a MERN Stack Developer building full-stack applications from scratch. I implemented authentication, REST APIs, and integrated external services. I also handled database design and deployment.",
    challenges: [
      "Implementing secure authentication flows",
      "Integrating multiple external APIs with rate limiting",
      "Managing MongoDB schema design for scalability",
    ],
    technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "TypeScript"],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    slug: "wingie",
    name: "Wingie",
    description:
      "A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.",
    url: "https://www.wingie.com",
    previewImage: ProjectWingie,
    technologies: [
      "React",
      "Typescript",
      "React Bootstrap",
      "Firebase",
      "Express.js",
      "PostgreSQL",
      "Styled Components",
      "Redux",
    ],
    fullDescription:
      "Wingie is a flight comparison and booking platform that helps users find affordable flights and purchase tickets securely. The application features real-time search, filtering, payment integration, and a responsive design for all devices.",
    challenges: [
      "Handling real-time flight data from multiple sources",
      "Implementing secure payment processing",
      "Optimizing search performance for large datasets",
      "Managing complex state for multi-step booking flow",
    ],
    highlights: [
      "Real-time flight search and comparison",
      "Secure payment integration",
      "Responsive design for mobile and desktop",
      "User authentication and booking history",
    ],
  },
  {
    slug: "fiskil",
    name: "Fiskil",
    description:
      "A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.",
    url: "https://fiskil.com.au",
    previewImage: ProjectFliski,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Material UI",
      "Redux Toolkit",
      "React Query",
      "Express.js",
      "PostgreSQL",
      "Firebase",
      "AWS Amplify",
      "Cypress",
      "Storybook",
    ],
    fullDescription:
      "Fiskil provides real-time open banking and energy data to help businesses make informed decisions. The platform features data visualization dashboards, API integrations, and a scalable backend built for high availability.",
    challenges: [
      "Integrating multiple banking APIs with different protocols",
      "Building real-time data pipelines",
      "Ensuring data security and compliance",
      "Creating intuitive dashboards for complex data",
    ],
    highlights: [
      "Real-time data visualization",
      "Open banking API integration",
      "Responsive design for enterprise users",
      "AWS deployment and scaling",
    ],
  },
  {
    slug: "pepehousing",
    name: "Pepehousing",
    description:
      "A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.",
    url: "https://pepehousing.com",
    previewImage: ProjectPepehousing,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Redux Toolkit",
      "React Query",
      "Storybook",
    ],
    fullDescription:
      "Pepehousing is a rental marketplace for flats and rooms in Poland. Users can browse verified listings, contact vendors, and complete payments online. The platform includes verification and secure payment handling.",
    challenges: [
      "Implementing secure vendor verification",
      "Building a scalable search and filter system",
      "Integrating payment gateways for Polish market",
      "Managing listing and user data efficiently",
    ],
    highlights: [
      "Verified rental listings",
      "Secure payment integration",
      "Responsive design for mobile users",
      "Vendor contact and messaging system",
    ],
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in full-stack JavaScript development with React, Next.js, Node.js, and TypeScript. I also have experience with MongoDB, PostgreSQL, AWS, Docker, and CI/CD pipelines.",
  },
  {
    question: "Are you available for new projects?",
    answer:
      "Yes! I'm currently open to new opportunities and collaborations. Feel free to reach out via email or the contact form to discuss your project.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Timeline depends on project scope. A simple landing page might take 1-2 weeks, while a full-stack application could take 2-3 months. I'll provide a detailed estimate after understanding your requirements.",
  },
  {
    question: "Do you work remotely?",
    answer:
      "Yes, I work remotely and am comfortable with async communication across time zones. I can also accommodate meetings when needed.",
  },
  {
    question: "Can you help with existing projects?",
    answer:
      "Absolutely. I can join existing projects for maintenance, refactoring, or new feature development. I'm experienced with code reviews and integrating into existing codebases.",
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Supervisor at Yns Systems",
    personAvatar: AvatarDummy,
    title: "Lead Developer",
    testimonial:
      "Shahzad demonstrated excellent skills in building dynamic user interfaces with React.js. His focus on component-based architecture significantly improved our frontend scalability.",
  },
  {
    personName: "Team Lead at Daz Teach",
    personAvatar: AvatarDummy,
    title: "DevOps Manager",
    testimonial:
      "During his time as a trainee, Shahzad was instrumental in maintaining our Linux environments and automating CI/CD pipelines. His proactive approach to troubleshooting system reliability was impressive.",
  },
  {
    personName: "Project Manager at Algo 3",
    personAvatar: AvatarDummy,
    title: "Senior Software Engineer",
    testimonial:
      "Shahzad is a detail-oriented MERN stack developer. He successfully built secure RESTful APIs and integrated complex external services while maintaining clean, maintainable code.",
  },
];
