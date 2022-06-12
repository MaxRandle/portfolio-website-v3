import React from "react";
import { Heading, IHeadingProps } from "./Heading";
import { ITypographyProps, Typography } from "./Typography";

const MDXComponents = {
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
};

export default MDXComponents;
