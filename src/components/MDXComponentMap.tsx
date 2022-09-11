import React from "react";
import { Heading, IHeadingProps } from "./Heading";

import { MDXComponents } from "mdx/types";
import { TypographyProps, Typography } from "./Typography";

const MDXComponentMap: MDXComponents = {
  h1: (props: IHeadingProps) => (
    <Heading
      className="mt-12"
      level={1}
      {...props}
    />
  ),
  h2: (props: IHeadingProps) => (
    <Heading
      className="mt-8"
      level={2}
      {...props}
    />
  ),
  h3: (props: IHeadingProps) => (
    <Heading
      className="mt-4"
      level={3}
      {...props}
    />
  ),
  p: (props: TypographyProps) => (
    <Typography
      className="mt-4"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mt-4"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mt-4"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="mt-4"
      // target="_blank"
      {...props}
    />
  ),
  li: ({ children, ...props }) => (
    <li
      className="space-x-4 ml-4"
      {...props}
    >
      <span>•</span>
      <span>{children}</span>
    </li>
  ),
  strong: ({ ...props }) => (
    <strong
      className="text-secondary-300"
      {...props}
    />
  ),
};

export default MDXComponentMap;
