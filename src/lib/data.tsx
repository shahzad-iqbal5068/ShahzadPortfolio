import { Github, Twitter, Figma } from "lucide-react";

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
import logoyns from "/public/images/logos/logo-yns.png";
import logoDaztech from "/public/images/logos/logo-daztech.jpg";
import logoAlgo3 from "/public/images/logos/logo-algo3.png";

import LogoUpwork from "/public/images/logos/logo-upwork.svg";
import LogoGreenApex from "/public/images/logos/logo-greenapex.svg";
import LogoGreenApexLight from "/public/images/logos/logo-greenapex-light.svg";
import LogoDotnpixel from "/public/images/logos/logo-dotnpixel.svg";
import LogoDotnpixelLight from "/public/images/logos/logo-dotnpixel-light.svg";

import ProjectFiskil from "/public/images/project-fiskil.png";
import ProjectWingie from "/public/images/project-wingie.png";
import ProjectPepehousing from "/public/images/project-pepehousing.png";

import AvatarKrisztian from "/public/images/avatar-krisztian.png";
import AvatarEugen from "/public/images/avatar-eugen.png";
import AvatarDummy from "/public/images/avatar-dummy.svg";

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
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/shahzad-iqbal5068",
  },
  {
    icon: Twitter,
    url: "https://twitter.com/shahzad_iqbal5068",
  },
  {
    icon: Figma,
    url: "https://www.figma.com/@shahsagarm",
  },
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
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  {
    label: "Nest.js",
    logo: LogoNest,
    url: "https://nestjs.com/",
  },
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
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/",
  },
  {
    label: "Cypress",
    logo: LogoCypress,
    darkModeLogo: LogoCypressLight,
    url: "https://www.cypress.io/",
  },
  {
    label: "Storybook",
    logo: LogoStorybook,
    url: "https://storybook.js.org/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: logoyns,
    logoAlt: "logo yns",
    position: "React Js Developer",
    startDate: new Date(2025, 7), // August 2025 [cite: 54]
    endDate: new Date(2026, 1), // February 2026 [cite: 54]
    currentlyWorkHere: true,
    summary: [
      "Built and managed dynamic user interfaces using React.js, focusing on component-based architecture and reusable UI elements.",
      "Integrated RESTful APIs and managed application state using tools like React Context and Redux for scalable frontend applications.",
      "Practiced version control using Git, collaborated via GitHub, and applied basic CI/CD workflows for front-end deployment.",
    ],
  },
  {
    logo: logoDaztech,
    darkModeLogo: logoDaztech,
    logoAlt: "Daztech logo",
    position: "Devops & System Trainee",
    startDate: new Date(2025, 5), // June 2025 [cite: 48]
    endDate: new Date(2025, 7), // August 2025 [cite: 48]
    currentlyWorkHere: false,
    summary: [
      "Managed Linux environments and AWS services (EC2, S3, IAM) while supporting VM-based clusters and Kubernetes fundamentals.",
      "Developed and maintained CI/CD pipelines using Git and GitHub Actions/Jenkins, leveraging Bash scripting for task automation.",
      "Containerized applications via Docker and improved system reliability through proactive monitoring, log analysis, and troubleshooting.",
    ],
  },
  {
    logo: logoAlgo3,
    darkModeLogo: logoAlgo3,
    logoAlt: "Algo3 logo",
    position: "Mern Stack Web Developer",
    startDate: new Date(2024, 0), // January 2024 [cite: 40]
    endDate: new Date(2025, 5), // June 2025 [cite: 40]
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
    previewImage: ProjectFiskil,
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

/*export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Krisztian Gyuris",
    personAvatar: AvatarKrisztian,
    title: "Founder - inboxgenie.io",
    testimonial:
      "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.",
  },
  {
    personName: "Eugen Esanu",
    personAvatar: AvatarEugen,
    title: "Founder - shosho.design",
    testimonial:
      "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
  },
  {
    personName: "Joe Matkin",
    personAvatar: AvatarDummy,
    title: "Freelancer",
    testimonial:
      "Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.",
  },
];*/

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
