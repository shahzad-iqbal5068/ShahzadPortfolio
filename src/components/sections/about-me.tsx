import Image from "next/image";

import ShahzadFullPose from "/public/images/shahzad-full-pose.jpeg";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import { EXTERNAL_LINKS } from "@/lib/data";

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={ShahzadFullPose}
              alt="Fullpose of Shahzad"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: "cover" }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I&apos;m a passionate,{" "}
            {/* <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.FIGMA}
            > */}
            Software Engineer
            {/* </Link>{" "} */}
            who specializes in full stack development (React.js & Node.js)[cite:
            16, 17]. I am enthusiastic about bringing the technical and visual
            aspects of digital products to life. User experience, pixel perfect
            design, and writing clear, readable, highly performant code matters
            to me.
          </Typography>
          <Typography>
            I began my professional journey as a developer in 2024, and since
            then, I&apos;ve continued to grow by taking on roles in both MERN
            stack development and DevOps infrastructure. I enjoy building
            cutting-edge web applications using modern technologies such as
            Next.js, TypeScript, Docker, and AWS
          </Typography>
          <Typography>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </Typography>
          <Typography>
            I am a progressive thinker and enjoy working on products end to end,
            from ideation and system architecture to deployment and CI/CD
            automation. You can find me on{" "}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.TWITTER}
            >
              Twitter
            </Link>{" "}
            where I share tech-related bites and build in public, or you can
            follow me on{" "}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>
            .
          </Typography>
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                B.S. in Computer Science from Islamia University of Bahawalpur
              </Typography>
              <Typography component="li">Cloud & DevOps Enthusiast</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Avid learner</Typography>
              <Typography component="li">Agile & Scrum practitioner</Typography>
            </ul>
          </div>
          <Typography>
            One last thing, I&apos;m always open to new opportunities and
            collaborations, so feel free to reach out and say hello!
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
