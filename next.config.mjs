import remarkFrontmatter from "remark-frontmatter";

/** @type {import('next').NextConfig} */
export const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          options: {
            providerImportSource: "@mdx-js/react",
            remarkPlugins: [remarkFrontmatter],
          },
        },
      ],
    });

    return config;
  },
  reactStrictMode: true,
  pageExtensions: ["tsx", "mdx"],
  compiler: {
    styledComponents: true,
  },
  eslint: {
    dirs: ["src"],
  },
};

// module.exports = nextConfig;
