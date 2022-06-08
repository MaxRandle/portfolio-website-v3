// const remarkFrontmatter = require("remark-frontmatter");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    // remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
});

const nextConfig = withMDX({
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  eslint: {
    dirs: ["src"],
  },
  // compiler: {
  //   styledComponents: true,
  // },
  // images: {
  //   loader: "imgix",
  //   path: "https://images.unsplash.com/",
  // },
});

module.exports = nextConfig;
