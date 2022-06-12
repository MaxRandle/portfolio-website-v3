import path from "path";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";

const PROJECTS_FOLDER = path.join(process.cwd(), "src", "projects");

/**
 * @returns an array of slugs as strings for the project pages
 */
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

export interface ProjectMeta {
  slug: string;
  title: string;
  summary: string;
  repo: string;
  tags: string[];
}

export interface Project {
  content: string;
  meta: ProjectMeta;
}
/**
 * @param slug
 * @returns parsed content and frontmatter
 */
export const getProjectFromSlug = (slug: string): Project => {
  const postPath = path.join(PROJECTS_FOLDER, `${slug}.mdx`);
  const source = fs.readFileSync(postPath);
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      title: data.title ?? slug,
      repo: data.repo ?? null,
      summary: data.summary ?? null,
      tags: data.tags ?? [],
    },
  };
};

/**
 *
 * @returns an array of all the project metas
 */
export const getAllProjectMetas = (): ProjectMeta[] => {
  const slugs = getProjectSlugs();
  const projects = slugs.map((slug) => getProjectFromSlug(slug));
  const projectMetas = projects.map((project) => project.meta);
  return projectMetas;
};
