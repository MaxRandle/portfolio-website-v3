import { getProjectFromSlug, getProjectSlugs, ProjectMeta } from "@/helpers/files";
import { PageLayout } from "@/layouts/PageLayout";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import Head from "next/head";
import { Section } from "@/layouts/Section";
import { Box } from "@/components/Box";
import { Button } from "@/components/Button";
import { ROUTES } from "@/config/ROUTES";
import { FiArrowLeft } from "react-icons/fi";
import { Heading } from "@/components/Heading";
import { GithubRepositoryChip } from "@/components/GithubRepositoryChip";
import { ProjectEmbed } from "@/components/ProjectEmbed";
import { Typography } from "@/components/Typography";
import "highlight.js/styles/atom-one-dark.css";

interface IPageProps {
  project: {
    source: MDXRemoteSerializeResult<Record<string, unknown>>;
    meta: ProjectMeta;
  };
}

const ProjectPage: NextPage<IPageProps> = ({ project }) => {
  const FRONTMATTER = project.meta as ProjectMeta;

  return (
    <>
      <Head>
        <title>{FRONTMATTER.title}</title>
      </Head>
      <PageLayout>
        <Section size="sm">
          <div className="container">
            <Box>
              <Button
                variant="inline"
                palette="primary"
                href={ROUTES.projects.root}
                IconLeft={() => <FiArrowLeft size={24} />}
              >
                {`Back to projects`}
              </Button>
            </Box>
          </div>
        </Section>

        <Section size="sm">
          <div className="container">
            <Box>
              <Heading level={1}>{FRONTMATTER.title}</Heading>
              <Typography
                className="mt-4"
                variant="subheading"
              >
                {FRONTMATTER.summary}
              </Typography>
              <GithubRepositoryChip
                className="mt-4"
                repo={FRONTMATTER.repo}
              />
            </Box>
          </div>
        </Section>

        <Section>
          <div className="container">
            <Box>
              <MDXRemote
                {...project.source}
                scope={FRONTMATTER}
                components={{ ProjectEmbed }}
              />
            </Box>
          </div>
        </Section>
      </PageLayout>
    </>
  );
};

export default ProjectPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getProjectFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }], rehypeHighlight],
    },
  });

  return { props: { project: { source: mdxSource, meta } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getProjectSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
