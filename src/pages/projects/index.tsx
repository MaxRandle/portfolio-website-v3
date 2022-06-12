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
import { Card, CardContent, CardHeading, CardMedia } from "@/layouts/Card";

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
          </Box>
        </div>
      </Section>

      <Section>
        <div className="container">
          <Box>
            <Heading level={2}>{projectsPageContent.hero.heading}</Heading>
          </Box>
        </div>
      </Section>

      <Section>
        <div className="container grid gap-4 grid-cols-1 lg:grid-cols-2">
          {projectMetas.map((meta) => (
            <Card
              isResponsive
              key={meta.slug}
              href={`/projects/${meta.slug}`}
            >
              <CardMedia className="w-40 h-40">
                <Figure
                  className="bg-purple-200"
                  alt="seal"
                  src="/media/seal1.png"
                />
              </CardMedia>
              <CardHeading>{meta.title}</CardHeading>
              <CardContent>
                <Typography>{meta.summary}</Typography>
              </CardContent>
            </Card>
            // <Card
            //   isResponsive
            //   key={meta.slug}
            //   className="flex space-x-4"
            //   href={`/projects/${meta.slug}`}
            // >

            //   <div className="shrink-0 w-40 h-40">
            //     <Figure
            //       className="bg-purple-200"
            //       alt="seal"
            //       src="/media/seal1.png"
            //       radius="sm"
            //     />
            //   </div>
            //   <div className="flex flex-col justify-center">
            //     <Heading level={4}>{meta.title}</Heading>
            //     <Typography className="mt-4">{meta.summary}</Typography>
            //   </div>
            // </Card>
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
