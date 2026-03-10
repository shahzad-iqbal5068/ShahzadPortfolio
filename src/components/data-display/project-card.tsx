"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { ProjectDetails as ProjectDetailsType } from "@/lib/types";
import Typography from "@/components/general/typography";
import Tag from "@/components/data-display/tag";
import Link from "@/components/navigation/link";

const ProjectCard = ({
  name,
  description,
  technologies,
  previewImage,
  slug,
}: ProjectDetailsType) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
    >
      <Link href={`/projects/${slug}`} noCustomization>
        <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-gray shadow-sm transition-all hover:border-emerald-500/50 hover:shadow-lg dark:border-gray-700 dark:bg-gray-100">
          <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-200">
            <Image
              src={previewImage}
              alt={`${name} preview`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-1 flex-col gap-3 p-6">
            <Typography variant="subtitle" className="font-semibold text-gray-900">
              {name}
            </Typography>
            <Typography variant="body3" className="line-clamp-2 text-gray-600">
              {description}
            </Typography>
            <div className="mt-auto flex flex-wrap gap-2">
              {technologies.slice(0, 4).map((tech, index) => (
                <Tag key={index} label={tech} />
              ))}
            </div>
            <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-emerald-600 transition-colors group-hover:text-emerald-700">
              View details
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
