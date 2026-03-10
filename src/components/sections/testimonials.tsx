"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";
import Tag from "@/components/data-display/tag";
import TestimonialDetails from "@/components/data-display/testimonial-details";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";

const TestimonialsSection = () => {
  return (
    <Container id="testimonials" className="bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="self-center">
          <Tag label="Testimonials" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Nice things people have said about me:
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex gap-12 max-md:flex-col md:max-lg:flex-wrap"
      >
        {TESTIMONIALS?.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <TestimonialDetails {...testimonial} />
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
};

export default TestimonialsSection;
