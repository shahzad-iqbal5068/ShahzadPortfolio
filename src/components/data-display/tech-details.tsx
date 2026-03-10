"use client";

import { motion } from "framer-motion";
import type { TechDetails } from "@/lib/types";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import ImageWrapper from "@/components/data-display/image-wrapper";

const TechDetails = ({
  url,
  logo,
  darkModeLogo,
  label,
  index = 0,
}: TechDetails & { index?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      whileHover={{ y: -4 }}
      className="flex flex-col items-center gap-2 p-4"
    >
      <Link noCustomization href={url} externalLink>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="flex h-38 w-38 shrink-0 items-center justify-center rounded-xl bg-gray-100/80 p-4 dark:bg-gray-800/50"
        >
          <div className="relative h-16 w-16">
            <ImageWrapper
              src={logo}
              fill
              srcForDarkMode={darkModeLogo}
              alt={label}
              className="object-contain transition-all duration-300"
            />
          </div>
        </motion.div>
      </Link>
      <Typography
        className="transition-colors duration-300 hover:text-emerald-500"
        variant="subtitle"
      >
        {label}
      </Typography>
    </motion.div>
  );
};

export default TechDetails;
