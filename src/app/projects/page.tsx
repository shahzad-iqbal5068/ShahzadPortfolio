"use client";

import { motion } from "framer-motion";

import { PROJECTS } from "@/lib/data";
import ProjectCard from "@/components/data-display/project-card";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";

export default function ProjectsPage() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col items-center gap-4"
      >
        <div className="self-center">
          <Tag label="Projects" />
        </div>
        <Typography variant="h2" className="max-w-2xl text-center">
          Some of the noteworthy projects I have built
        </Typography>
        <Typography className="max-w-xl text-center text-gray-600">
          Click on any project to view full details, tech stack, and challenges faced.
        </Typography>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </Container>
  );
}
