"use client";

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import Image from "next/image";

import { TESTIMONIALS } from "@/lib/data";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";

const TestimonialCard = ({
  personName,
  personAvatar,
  testimonial,
  title,
}: {
  personName: string;
  personAvatar?: string | import("next/image").StaticImageData;
  testimonial: string;
  title: string;
}) => (
  <div className="mx-4 flex min-w-[320px] max-w-[380px] flex-col items-center gap-4 rounded-xl border border-gray-200 bg-gray p-6 shadow-sm dark:border-gray-700 dark:bg-gray-100">
    {personAvatar && (
      <Image
        src={personAvatar}
        alt={`${personName} avatar`}
        width={64}
        height={64}
        className="rounded-full object-cover"
      />
    )}
    <Typography className="text-center text-sm italic">
      &quot;{testimonial}&quot;
    </Typography>
    <div className="flex flex-col gap-1">
      <Typography variant="subtitle" className="text-center font-semibold text-gray-900">
        {personName}
      </Typography>
      <Typography variant="body3" className="text-center text-gray-600">
        {title}
      </Typography>
    </div>
  </div>
);

const TestimonialsMarqueeSection = () => {
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <Container id="testimonials" className="bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex flex-col items-center gap-4"
      >
        <div className="self-center">
          <Tag label="Testimonials" />
        </div>
        <Typography variant="h3" className="max-w-xl text-center">
          Nice things people have said about me
        </Typography>
      </motion.div>

      <div className="overflow-hidden">
        <Marquee
          speed={40}
          pauseOnHover
          gradient={false}
          className="py-4"
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.personName}-${index}`} {...testimonial} />
          ))}
        </Marquee>
      </div>
    </Container>
  );
};

export default TestimonialsMarqueeSection;
