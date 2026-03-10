"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { ProjectDetails as ProjectDetailsType } from "@/lib/types";
import Typography from "@/components/general/typography";
import Tag from "@/components/data-display/tag";
import Link from "@/components/navigation/link";
import Container from "@/components/layout/container";

const ProjectDetailPage = ({ project }: { project: ProjectDetailsType }) => {
  const {
    name,
    description,
    fullDescription,
    url,
    previewImage,
    technologies,
    challenges,
    highlights,
  } = project;

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-4xl"
      >
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-gray-600 transition-colors hover:text-emerald-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray shadow-lg dark:border-gray-700 dark:bg-gray-100">
          <div className="relative aspect-video w-full bg-gray-100 dark:bg-gray-200">
            <Image
              src={previewImage}
              alt={`${name} preview`}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Typography variant="h2" className="font-bold text-gray-900">
                {name}
              </Typography>
              <Link
                href={url}
                externalLink
                noCustomization
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 transition-colors hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-700 dark:border-gray-600 dark:hover:bg-emerald-950"
              >
                <ExternalLink className="h-4 w-4" />
                Visit Site
              </Link>
            </div>

            <Typography className="mt-4 text-gray-600">{description}</Typography>

            {fullDescription && (
              <div className="mt-6">
                <Typography variant="subtitle" className="mb-2 font-semibold text-gray-900">
                  About the Project
                </Typography>
                <Typography className="text-gray-600">{fullDescription}</Typography>
              </div>
            )}

            <div className="mt-8">
              <Typography variant="subtitle" className="mb-3 font-semibold text-gray-900">
                Tech Stack
              </Typography>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Tag key={index} label={tech} />
                ))}
              </div>
            </div>

            {highlights && highlights.length > 0 && (
              <div className="mt-8">
                <Typography variant="subtitle" className="mb-3 font-semibold text-gray-900">
                  Key Highlights
                </Typography>
                <ul className="list-inside list-disc space-y-2 text-gray-600">
                  {highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}

            {challenges && challenges.length > 0 && (
              <div className="mt-8">
                <Typography variant="subtitle" className="mb-3 font-semibold text-gray-900">
                  Challenges & Solutions
                </Typography>
                <ul className="list-inside list-disc space-y-2 text-gray-600">
                  {challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default ProjectDetailPage;
