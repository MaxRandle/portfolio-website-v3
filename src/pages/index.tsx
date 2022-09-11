import type { GetStaticProps, NextPage } from "next";
import { Box } from "@components/Box";
import { Heading } from "@components/Heading";
import { Typography } from "@components/Typography";
import { PageLayout } from "@layouts/PageLayout";
import { ISectionProps, Section } from "@layouts/Section";
import { Media, MediaContent, MediaHeader, MediaMedia } from "@layouts/media";
import { GridReel, GridReelTrack, GridReelTrackItem } from "@layouts/grid-reel";
import { Figure } from "@components/Figure";
import homePageContent from "@content/homePage";
import { ProjectsList } from "@layouts/ProjectsList";
import { getAllProjectMetas, ProjectMeta } from "@helpers/files";

const Home: NextPage<{ projectMetas: ProjectMeta[] }> = ({ projectMetas }) => {
  function Hero({ ...props }: ISectionProps) {
    return (
      <Section {...props}>
        <div className="container mx-auto px-6">
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
        </div>
      </Section>
    );
  }

  function Work({ ...props }: ISectionProps) {
    return (
      <Section {...props}>
        <div className="container">
          <Box
            palette="base"
            isRounded="md"
            elevation={2}
          >
            <Media>
              <MediaHeader>
                <Heading level={2}>{homePageContent.work.heading}</Heading>
              </MediaHeader>
              <MediaMedia>
                <Figure
                  className="dark:opacity-80"
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
      <Section
        palette="primary"
        {...props}
      >
        <div className="container mx-auto px-6 grid gap-10 grid-cols-1 lg:grid-cols-2">
          <Heading
            className="lg:col-span-2"
            level={2}
          >
            {homePageContent.skills.heading}
          </Heading>
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
                <Typography variant="subheading">{name}</Typography>
                <Typography
                  className="mt-4"
                  variant="body"
                >
                  {description}
                </Typography>
              </div>
            </div>
          ))}
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
        <div className="container mx-auto px-6 md:px-0">
          <Heading level={2}>{homePageContent.hobbies.heading}</Heading>
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
                  alt={image.alt}
                  aspectRatio="5:3"
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
          <div className="mx-6 md:mx-0">
            <Heading level={2}>{homePageContent.projects.heading}</Heading>
            <Typography>{homePageContent.projects.content}</Typography>
          </div>
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
    </PageLayout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = () => {
  const projectMetas = getAllProjectMetas();
  return { props: { projectMetas } };
};
