"use client";

import { motion } from "framer-motion";

import { EXPERIENCES } from "@/lib/data";
import ExperienceCard from "@/components/data-display/experience-card";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";

export default function ExperiencePage() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col items-center gap-4"
      >
        <div className="self-center">
          <Tag label="Experience" />
        </div>
        <Typography variant="h2" className="max-w-2xl text-center">
          My professional journey
        </Typography>
        <Typography className="max-w-xl text-center text-gray-600">
          Click on any company to view full details, technologies used, and challenges faced.
        </Typography>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {EXPERIENCES.map((experience) => (
          <ExperienceCard key={experience.slug} {...experience} />
        ))}
      </div>
    </Container>
  );
}
