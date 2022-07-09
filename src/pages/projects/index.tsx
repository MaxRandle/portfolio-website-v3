import { PageLayout } from "@/layouts/PageLayout";
import { Section } from "@/layouts/Section";
import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { ROUTES } from "@/config/ROUTES";
import projectsPageContent from "@/content/projectsPage";
import { GetStaticProps, NextPage } from "next";
import { FiArrowLeft } from "react-icons/fi";
import { getAllProjectMetas, ProjectMeta } from "@/helpers/files";
import { Typography } from "@/components/Typography";
import { Box } from "@/components/Box";
import { Figure } from "@/components/Figure";
import { Card, CardContent, CardMedia } from "@/layouts/Card";

const ProjectsPage: NextPage<{ projectMetas: ProjectMeta[] }> = (props) => {
  const { projectMetas } = props;

  return (
    <PageLayout>
      <Section>
        <div className="container">
          <Box>
            <Button
              variant="inline"
              palette="primary"
              href={ROUTES.home.root + "#projects"}
              IconLeft={() => <FiArrowLeft size={24} />}
            >
              Back to homepage
            </Button>
            <Heading
              className="mt-2"
              level={1}
            >
              {projectsPageContent.hero.heading}
            </Heading>
          </Box>
        </div>
      </Section>

      <Section>
        <div className="container flex flex-col space-y-8">
          {projectMetas.map((meta) => (
            <Card
              isResponsive
              key={meta.slug}
              href={`/projects/${meta.slug}`}
            >
              <CardMedia className="w-24 sm:w-40 h-24 sm:h-40">
                <Figure
                  className="bg-purple-200"
                  alt={`${meta.title} thumbnail`}
                  src={meta.thumbnail ?? "/media/seal1.png"}
                />
              </CardMedia>
              <CardContent className="space-y-4">
                <Heading level={4}>{meta.title}</Heading>
                <Typography>{meta.summary}</Typography>
                <Typography
                  variant="caption"
                  palette="faded"
                  style={{ textTransform: "uppercase" }}
                >
                  {meta.tags.join(" | ")}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
};

export default ProjectsPage;

export const getStaticProps: GetStaticProps = () => {
  const projectMetas = getAllProjectMetas();
  return { props: { projectMetas } };
};
