import { getProjectFromSlug, getProjectSlugs } from "@/helpers/files";
import { PageLayout } from "@/layouts/PageLayout";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

const Project: NextPage = () => {
  return <PageLayout>yoyo</PageLayout>;
};

export default Project;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getProjectSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const project = getProjectFromSlug(slug);

  return { props: { project } };
};
