import React from "react";
import { Heading, IHeadingProps } from "./Heading";

import { MDXComponents } from "mdx/types";
import { ITypographyProps, Typography } from "./Typography";

const MDXComponentMap: MDXComponents = {
  h1: (props: IHeadingProps) => (
    <Heading
      className="mt-12"
      level={2}
      {...props}
    />
  ),
  h2: (props: IHeadingProps) => (
    <Heading
      className="mt-8"
      level={3}
      {...props}
    />
  ),
  h3: (props: IHeadingProps) => (
    <Heading
      className="mt-4"
      level={4}
      {...props}
    />
  ),
  p: (props: ITypographyProps) => (
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
      target="_blank"
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
};

export default MDXComponentMap;
