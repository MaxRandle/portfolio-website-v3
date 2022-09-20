import { replaceSlug } from "@helpers/url";

export const ROUTES = {
  home: { root: "/" },
  projects: { slug: (slug: string) => replaceSlug("/projects/:slug", slug) },
  resume: { root: "/resume" },
};
