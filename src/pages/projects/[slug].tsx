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

interface IPageProps {
  project: {
    source: MDXRemoteSerializeResult<Record<string, unknown>>;
    meta: ProjectMeta;
  };
}

const ProjectPage: NextPage<IPageProps> = ({ project }) => {
  return (
    <>
      <Head>
        <title>{project.meta.title}</title>
      </Head>
      <PageLayout>
        <Section>
          <div className="container">
            <Box>
              <Button
                variant="inline"
                palette="primary"
                href={ROUTES.projects.root}
                IconLeft={() => <FiArrowLeft size={24} />}
              >
                Back to projects
              </Button>
              <Heading
                className="mt-2"
                level={2}
              >
                {project.meta.title}
              </Heading>
            </Box>
          </div>
        </Section>

        <Section>
          <div className="container">
            <Box>
              <MDXRemote {...project.source} />
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
