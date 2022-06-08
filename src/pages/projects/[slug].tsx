import { getProjectSlugs } from "@/helpers/files";
import { PageLayout } from "@/layouts/PageLayout";
import { GetStaticPaths, NextPage } from "next";

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

export const getStaticProps = ({ params }) => {};
