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

// Experience/Company Logos
import LogoYns from "/public/images/logos/logo-yns.png";
import LogoDaztech from "/public/images/logos/logo-daztech.jpg";
import LogoAlgo3 from "/public/images/logos/logo-algo3.jpg";
import {
  ExperienceDetails,
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

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
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
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
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
  },
  {
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
  },
  {
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
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
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
  },
  {
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
  },
  {
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
