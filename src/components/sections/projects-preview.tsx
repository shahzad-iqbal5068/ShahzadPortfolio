"use client";

import { motion } from "framer-motion";

import { PROJECTS } from "@/lib/data";
import ProjectCard from "@/components/data-display/project-card";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import Link from "@/components/navigation/link";

const ProjectsPreviewSection = () => {
  return (
    <Container id="work">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col items-center gap-4"
      >
        <div className="self-center">
          <Tag label="Projects" />
        </div>
        <Typography variant="h3" className="max-w-xl text-center">
          Featured projects I have built
        </Typography>
        <Link
          href="/projects"
          className="mt-2 text-emerald-600 transition-colors hover:text-emerald-700"
        >
          View all projects →
        </Link>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.slice(0, 3).map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </Container>
  );
};

export default ProjectsPreviewSection;
