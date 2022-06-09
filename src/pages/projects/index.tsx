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

      {projectMetas.map((meta) => (
        <Section>
          <div className="container">
            <Box>
              <Heading level={4}>{meta.title}</Heading>
              <Typography>{meta.summary}</Typography>
            </Box>
          </div>
        </Section>
      ))}
    </PageLayout>
  );
};

export default ProjectsPage;

export const getStaticProps: GetStaticProps = () => {
  const projectMetas = getAllProjectMetas();

  return { props: { projectMetas } };
};
