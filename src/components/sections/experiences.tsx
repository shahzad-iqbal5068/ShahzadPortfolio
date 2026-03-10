"use client";

import { motion } from "framer-motion";
import { EXPERIENCES } from "@/lib/data";
import ExperienceDetails from "@/components/data-display/experience-details";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";

const ExperienceSection = () => {
  return (
    <Container className="bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="self-center">
          <Tag label="Experience" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Here is a quick summary of my most recent experiences:
        </Typography>
      </motion.div>

      {EXPERIENCES?.map((experience, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ExperienceDetails {...experience} />
        </motion.div>
      ))}
    </Container>
  );
};

export default ExperienceSection;
