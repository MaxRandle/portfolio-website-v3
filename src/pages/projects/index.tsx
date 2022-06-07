import { PageLayout } from "@/layouts/PageLayout";
import { Section } from "@/layouts/Section";
import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { ROUTES } from "@/config/ROUTES";
import projectsPageContent from "@/content/projectsPage";
import { NextPage } from "next";
import { FiArrowLeft } from "react-icons/fi";

const ProjectsPage: NextPage = () => {
  return (
    <PageLayout>
      <Section>
        <div className="container">
          <Button
            variant="inline"
            palette="primary"
            href={ROUTES.home.root + "#projects"}
            IconLeft={() => <FiArrowLeft size={24} />}
          >
            Back to homepage
          </Button>
        </div>
      </Section>

      <Section>
        <div className="container">
          <Heading level={2}>{projectsPageContent.hero.heading}</Heading>
        </div>
      </Section>
    </PageLayout>
  );
};

export default ProjectsPage;
