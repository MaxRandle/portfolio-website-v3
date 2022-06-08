import path from "path";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";

const PROJECTS_FOLDER = path.join(process.cwd(), "projects");

export const getProjectSlugs = (): string[] => {
  const paths = sync(`${PROJECTS_FOLDER}/*.mdx`);

  const slugs = paths.map((path) => {
    const parts = path.split("/");
    const fileName = parts[parts.length - 1];
    const [slug, _ext] = fileName.split(".");
    return slug;
  });

  return slugs;
};

interface Project {
  content: string;
  meta: {
    slug: string;
    title: string;
  };
}

export const getProjectFromSlug = (slug: string): Project => {
  const postPath = path.join(PROJECTS_FOLDER, `${slug}.mdx`);
  const source = fs.readFileSync(postPath);
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      title: data.title ?? slug,
    },
  };
};
