import { notFound } from "next/navigation";

import { PROJECTS } from "@/lib/data";
import ProjectDetailPage from "@/components/pages/project-detail-page";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}
