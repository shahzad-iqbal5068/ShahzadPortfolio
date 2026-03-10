import type { StaticImageData } from 'next/image';

export type TechDetails = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  label: string;
  url: string;
};

export type ExperienceDetails = {
  slug: string;
  companyName: string;
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  logoAlt: string;
  position: string;
  currentlyWorkHere?: boolean;
  startDate: Date;
  endDate?: Date;
  summary: string[];
  fullDescription?: string;
  challenges?: string[];
  technologies?: string[];
};

export type ProjectDetails = {
  slug: string;
  name: string;
  description: string;
  url: string;
  previewImage: string | StaticImageData;
  technologies: string[];
  fullDescription?: string;
  challenges?: string[];
  highlights?: string[];
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type TestimonialDetails = {
  personName: string;
  personAvatar?: string | StaticImageData;
  testimonial: string;
  title: string;
};
