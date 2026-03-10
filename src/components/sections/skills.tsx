"use client";

import { motion } from "framer-motion";
import { TECHNOLOGIES } from "@/lib/data";
import Tag from "@/components/data-display/tag";
import TechDetails from "@/components/data-display/tech-details";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SkillsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute bottom-0 left-0 right-0 w-full pt-6">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
  };

  return (
    <Container id="skills">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="relative mb-12 flex flex-col items-center gap-4"
      >
        <div className="self-center">
          <Tag label="Skills" />
        </div>
        <Typography variant="h3" className="max-w-xl text-center">
          The skills, tools and technologies I am really good at:
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative w-full pb-16"
      >
        <Slider {...settings}>
          {TECHNOLOGIES.map((technology, index) => (
            <TechDetails {...technology} key={technology.label} index={index} />
          ))}
        </Slider>
      </motion.div>
    </Container>
  );
};

export default SkillsSection;
