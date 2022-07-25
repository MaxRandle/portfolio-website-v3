import type { GetStaticProps, NextPage } from "next";
import { Box } from "@/components/Box";
import { Heading } from "@/components/Heading";
import { Typography } from "@/components/Typography";
import { PageLayout } from "@/layouts/PageLayout";
import { ISectionProps, Section } from "@/layouts/Section";
import { Media, MediaContent, MediaHeader, MediaMedia } from "@/layouts/media";
import { IconButton } from "@/components/IconButton";

import { DiGithubBadge } from "react-icons/di";
import { FaLinkedinIn } from "react-icons/fa";

import { CgFileDocument } from "react-icons/cg";
import { GridReel, GridReelTrack, GridReelTrackItem } from "@/layouts/grid-reel";
import { Figure } from "@/components/Figure";
import homePageContent from "@/content/homePage";
import { ProjectsList } from "@/layouts/ProjectsList";
import { getAllProjectMetas, ProjectMeta } from "@/helpers/files";

const Home: NextPage<{ projectMetas: ProjectMeta[] }> = ({ projectMetas }) => {
  function Hero({ ...props }: ISectionProps) {
    return (
      <Section {...props}>
        <div className="container">
          <Box>
            <Heading
              className="text-center"
              level={1}
            >
              {homePageContent.hero.heading}
            </Heading>
            <Typography
              className="mt-4 lg:mt-6 text-center"
              variant="subheading"
            >
              {homePageContent.hero.content}
            </Typography>
          </Box>
        </div>
      </Section>
    );
  }

  function Work({ ...props }: ISectionProps) {
    return (
      <Section {...props}>
        <div className="container">
          <Box
            palette="secondary"
            texture="rg2"
            isResponsive
          >
            <Media>
              <MediaHeader>
                <Heading palette="rainbow">{homePageContent.work.heading}</Heading>
              </MediaHeader>
              <MediaMedia>
                <Figure
                  src={homePageContent.work.media}
                  alt="max"
                  radius="sm"
                />
              </MediaMedia>
              <MediaContent>
                <Typography>{homePageContent.work.content}</Typography>
              </MediaContent>
            </Media>
          </Box>
        </div>
      </Section>
    );
  }

  function Skills({ ...props }: ISectionProps) {
    return (
      <Section {...props}>
        <div className="container">
          <Box className="grid gap-10 grid-cols-1 lg:grid-cols-2">
            <div className="lg:col-span-2">
              <Heading palette="rainbow">{homePageContent.skills.heading}</Heading>
            </div>
            {homePageContent.skills.contentArray.map(({ name, description, IconComponent, iconColor }) => (
              <div
                className="flex"
                key={name}
              >
                <IconComponent
                  className="shrink-0 mr-6"
                  color={iconColor}
                  size={32}
                />
                <div>
                  <Heading level={4}>{name}</Heading>
                  <Typography
                    className="mt-4"
                    variant="body"
                  >
                    {description}
                  </Typography>
                </div>
              </div>
            ))}
          </Box>
        </div>
      </Section>
    );
  }

  function External({ ...props }: ISectionProps) {
    return (
      <Section {...props}>
        <div className="container">
          <Box
            isResponsive
            className="space-y-10"
          >
            <Heading
              className="text-center"
              level={2}
            >
              {homePageContent.external.heading}
            </Heading>
            <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0">
              <div className="basis-0 flex-grow flex lg:flex-col items-center">
                <IconButton>
                  <DiGithubBadge size={64} />
                </IconButton>
                <Heading className="ml-4 lg:ml-0 lg:mt-4">{homePageContent.external.links.github.title}</Heading>
              </div>
              <div className="basis-0 flex-grow flex lg:flex-col items-center">
                <IconButton>
                  <CgFileDocument size={56} />
                </IconButton>
                <Heading className="ml-4 lg:ml-0 lg:mt-4">{homePageContent.external.links.resume.title}</Heading>
              </div>
              <div className="basis-0 flex-grow flex lg:flex-col items-center">
                <IconButton>
                  <FaLinkedinIn size={48} />
                </IconButton>
                <Heading className="ml-4 lg:ml-0 lg:mt-4">{homePageContent.external.links.linkedIn.title}</Heading>
              </div>
            </div>
          </Box>
        </div>
      </Section>
    );
  }

  function Hobbies({ ...props }: ISectionProps) {
    return (
      <Section
        id="hobbies"
        className="space-y-6 lg:space-y-10"
        {...props}
      >
        <div className="container space-y-4">
          <Box>
            <Heading palette="rainbow">{homePageContent.hobbies.heading}</Heading>
          </Box>
        </div>

        <GridReel>
          <GridReelTrack>
            {homePageContent.hobbies.imageReel.slice(0, 4).map((image) => (
              <GridReelTrackItem key={image.src}>
                <Figure
                  src={image.src}
                  alt={image.alt}
                  aspectRatio="5:3"
                  radius="sm"
                >
                  {image.description}
                </Figure>
              </GridReelTrackItem>
            ))}
          </GridReelTrack>

          <GridReelTrack>
            {homePageContent.hobbies.imageReel.slice(4).map((image) => (
              <GridReelTrackItem key={image.src}>
                <Figure
                  src={image.src}
                  alt="seal"
                  aspectRatio="5:3"
                  className="bg-amber-500"
                  radius="sm"
                >
                  <Typography variant="body">{image.description}</Typography>
                </Figure>
              </GridReelTrackItem>
            ))}
          </GridReelTrack>
        </GridReel>
      </Section>
    );
  }

  function Projects({ ...props }: ISectionProps) {
    return (
      <Section
        id="projects"
        {...props}
      >
        <div className="container">
          <Box className="space-y-4 lg:space-y-6">
            <Heading palette="rainbow">{homePageContent.projects.heading}</Heading>
            <Typography>{homePageContent.projects.content}</Typography>
          </Box>
          <ProjectsList
            className="mt-6 lg:mt-10"
            projectMetas={projectMetas}
          />
        </div>
      </Section>
    );
  }

  return (
    <PageLayout>
      <Hero />
      <Work />
      <Projects />
      <Skills />
      <Hobbies />
      <External />
    </PageLayout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = () => {
  const projectMetas = getAllProjectMetas();
  return { props: { projectMetas } };
};
