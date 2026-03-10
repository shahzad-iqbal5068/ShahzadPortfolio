import { notFound } from "next/navigation";

import { EXPERIENCES } from "@/lib/data";
import ExperienceDetailPage from "@/components/pages/experience-detail-page";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return EXPERIENCES.map((exp) => ({ slug: exp.slug }));
}

export default async function ExperienceDetailRoute({ params }: Props) {
  const { slug } = await params;
  const experience = EXPERIENCES.find((e) => e.slug === slug);

  if (!experience) {
    notFound();
  }

  return <ExperienceDetailPage experience={experience} />;
}
