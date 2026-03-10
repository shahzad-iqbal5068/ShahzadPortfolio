"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import ProjectDetails from "@/components/data-display/project-details";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";

const WorkSection = () => {
  return (
    <Container id="work">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="self-center">
          <Tag label="Work" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Some of the noteworthy projects I have built:
        </Typography>
      </motion.div>

      {PROJECTS?.map((project, index) => (
        <motion.div
          key={project.name}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ProjectDetails
            {...project}
            layoutType={index % 2 === 0 ? "default" : "reverse"}
          />
        </motion.div>
      ))}
    </Container>
  );
};

export default WorkSection;
