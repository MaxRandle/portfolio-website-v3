import type { NextPage } from "next";
import { Box } from "@/components/Box";
import { Heading } from "@/components/Heading";
import { Typography } from "@/components/Typography";
import { PageLayout } from "@/layouts/PageLayout";
import { ISectionProps, Section } from "@/layouts/Section";
import { Catto } from "@/components/Catto";
import { Media, MediaContent, MediaHeader, MediaMedia } from "@/layouts/media";
import { IconButton } from "@/components/IconButton";

import { DiGithubBadge } from "react-icons/di";
import { FaLinkedinIn } from "react-icons/fa";

import { CgFileDocument } from "react-icons/cg";
import { GridReel, GridReelTrack, GridReelTrackItem } from "@/layouts/grid-reel";
import { Figure } from "@/components/Figure";
import { Button } from "@/components/Button";

import { FiArrowRight } from "react-icons/fi";
import { ROUTES } from "@/config/ROUTES";
import homePageContent from "@/content/homePage";

const Home: NextPage = () => {
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

  function EvesDropper({ ...props }: ISectionProps) {
    return (
      <Section
        {...props}
        palette="secondary"
        texture="lg1"
      >
        <div className="h-28 lg:h-16" />
        <Catto />
      </Section>
    );
  }

  function Work({ ...props }: ISectionProps) {
    return (
      <Section {...props}>
        <div className="container">
          <Box
            color="secondary"
            texture="rg2"
            isResponsive
          >
            <Media>
              <MediaHeader>
                <Typography
                  variant="subheading"
                  color="rainbow-reverse"
                >
                  {homePageContent.work.heading}
                </Typography>
                <Heading className="mt-4">{homePageContent.work.subheading}</Heading>
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
          <Box
            className="grid gap-10 grid-cols-1 lg:grid-cols-2"
            isResponsive
          >
            <div className="lg:col-span-2">
              <Typography
                variant="subheading"
                color="rainbow"
              >
                {homePageContent.skills.heading}
              </Typography>
              <Heading className="mt-4">{homePageContent.skills.subheading}</Heading>
            </div>
            {homePageContent.skills.contentArray.map(({ name, description, IconComponent, iconColor }) => (
              <div
                className="flex"
                key={name}
              >
                <IconComponent
                  className="shrink-0 mr-6"
                  color={iconColor}
                  size={48}
                />
                <div className="">
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
          <Typography
            variant="subheading"
            color="rainbow-reverse"
          >
            {homePageContent.hobbies.heading}
          </Typography>
          <Heading>{homePageContent.hobbies.subheading}</Heading>
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
        className="space-y-6 lg:space-y-10"
        {...props}
      >
        <div className="container">
          <Box
            isResponsive
            className="space-y-10"
            color="secondary"
            texture="rg2"
          >
            <Media layout="reverse">
              <MediaHeader>
                <Typography
                  variant="subheading"
                  color="rainbow"
                >
                  {homePageContent.projects.heading}
                </Typography>
                <Heading className="mt-4">{homePageContent.projects.subheading}</Heading>
              </MediaHeader>
              <MediaMedia>
                <Figure
                  src={homePageContent.projects.media}
                  alt="max"
                  radius="sm"
                />
              </MediaMedia>
              <MediaContent>
                <Typography>{homePageContent.projects.content}</Typography>
                <Button
                  className="mt-10"
                  variant="inline"
                  palette="primary"
                  href={ROUTES.projects.root}
                  IconRight={() => <FiArrowRight size={24} />}
                >
                  {homePageContent.projects.linkText}
                </Button>
              </MediaContent>
            </Media>
          </Box>
        </div>
      </Section>
    );
  }

  return (
    <PageLayout>
      <EvesDropper />
      <Hero />
      <Work />
      <Skills />
      <Projects />
      <Hobbies />
      <External />
    </PageLayout>
  );
};

export default Home;