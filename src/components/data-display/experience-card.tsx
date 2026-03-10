"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { ExperienceDetails as ExperienceDetailsType } from "@/lib/types";
import Typography from "@/components/general/typography";
import ImageWrapper from "@/components/data-display/image-wrapper";
import Link from "@/components/navigation/link";

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
};

const ExperienceCard = ({
  slug,
  companyName,
  logo,
  darkModeLogo,
  logoAlt,
  position,
  currentlyWorkHere,
  startDate,
  endDate,
  summary,
}: ExperienceDetailsType) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
    >
      <Link href={`/experience/${slug}`} noCustomization>
        <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-gray p-6 shadow-sm transition-all hover:border-emerald-500/50 hover:shadow-lg dark:border-gray-700 dark:bg-gray-100">
          <div className="flex items-start gap-4">
            <div className="shrink-0">
              <ImageWrapper
                src={logo}
                srcForDarkMode={darkModeLogo}
                alt={logoAlt}
                width={64}
                height={64}
                className="rounded-lg object-contain"
              />
            </div>
            <div className="min-w-0 flex-1">
              <Typography variant="subtitle" className="font-semibold text-gray-900">
                {companyName}
              </Typography>
              <Typography variant="body3" className="text-emerald-600">
                {position}
              </Typography>
              <Typography variant="body3" className="mt-1 text-gray-600">
                {new Intl.DateTimeFormat("en-US", dateFormatOptions).format(startDate)} -{" "}
                {currentlyWorkHere
                  ? "Present"
                  : endDate
                    ? new Intl.DateTimeFormat("en-US", dateFormatOptions).format(endDate)
                    : "NA"}
              </Typography>
            </div>
          </div>
          <Typography variant="body3" className="mt-4 line-clamp-2 text-gray-600">
            {summary[0]}
          </Typography>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-600 transition-colors group-hover:text-emerald-700">
            View details
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ExperienceCard;
