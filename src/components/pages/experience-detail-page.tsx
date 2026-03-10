"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import { ExperienceDetails as ExperienceDetailsType } from "@/lib/types";
import Typography from "@/components/general/typography";
import Tag from "@/components/data-display/tag";
import ImageWrapper from "@/components/data-display/image-wrapper";
import Link from "@/components/navigation/link";
import Container from "@/components/layout/container";

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
};

const ExperienceDetailPage = ({
  experience,
}: {
  experience: ExperienceDetailsType;
}) => {
  const {
    companyName,
    logo,
    darkModeLogo,
    logoAlt,
    position,
    currentlyWorkHere,
    startDate,
    endDate,
    summary,
    fullDescription,
    challenges,
    technologies,
  } = experience;

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-4xl"
      >
        <Link
          href="/experience"
          className="mb-8 inline-flex items-center gap-2 text-gray-600 transition-colors hover:text-emerald-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Experience
        </Link>

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray p-8 shadow-lg dark:border-gray-700 dark:bg-gray-100 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
            <div className="shrink-0">
              <ImageWrapper
                src={logo}
                srcForDarkMode={darkModeLogo}
                alt={logoAlt}
                width={120}
                height={120}
                className="rounded-xl object-contain"
              />
            </div>
            <div className="min-w-0 flex-1">
              <Typography variant="h2" className="font-bold text-gray-900">
                {companyName}
              </Typography>
              <Typography variant="subtitle" className="mt-1 text-emerald-600">
                {position}
              </Typography>
              <Typography variant="body3" className="mt-2 text-gray-600">
                {new Intl.DateTimeFormat("en-US", dateFormatOptions).format(startDate)} -{" "}
                {currentlyWorkHere
                  ? "Present"
                  : endDate
                    ? new Intl.DateTimeFormat("en-US", dateFormatOptions).format(endDate)
                    : "NA"}
              </Typography>
            </div>
          </div>

          {fullDescription && (
            <div className="mt-8">
              <Typography variant="subtitle" className="mb-2 font-semibold text-gray-900">
                About the Role
              </Typography>
              <Typography className="text-gray-600">{fullDescription}</Typography>
            </div>
          )}

          <div className="mt-8">
            <Typography variant="subtitle" className="mb-3 font-semibold text-gray-900">
              Key Responsibilities
            </Typography>
            <ul className="list-inside list-disc space-y-2 text-gray-600">
              {summary.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {technologies && technologies.length > 0 && (
            <div className="mt-8">
              <Typography variant="subtitle" className="mb-3 font-semibold text-gray-900">
                Technologies Used
              </Typography>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Tag key={index} label={tech} />
                ))}
              </div>
            </div>
          )}

          {challenges && challenges.length > 0 && (
            <div className="mt-8">
              <Typography variant="subtitle" className="mb-3 font-semibold text-gray-900">
                Challenges Faced
              </Typography>
              <ul className="list-inside list-disc space-y-2 text-gray-600">
                {challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    </Container>
  );
};

export default ExperienceDetailPage;
