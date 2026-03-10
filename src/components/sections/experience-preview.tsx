"use client";

import { motion } from "framer-motion";

import { EXPERIENCES } from "@/lib/data";
import ExperienceCard from "@/components/data-display/experience-card";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import Link from "@/components/navigation/link";

const ExperiencePreviewSection = () => {
  return (
    <Container className="bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col items-center gap-4"
      >
        <div className="self-center">
          <Tag label="Experience" />
        </div>
        <Typography variant="h3" className="max-w-xl text-center">
          Companies I have worked with
        </Typography>
        <Link
          href="/experience"
          className="mt-2 text-emerald-600 transition-colors hover:text-emerald-700"
        >
          View all experience →
        </Link>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {EXPERIENCES.map((experience) => (
          <ExperienceCard key={experience.slug} {...experience} />
        ))}
      </div>
    </Container>
  );
};

export default ExperiencePreviewSection;
