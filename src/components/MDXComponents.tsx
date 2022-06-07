import React from "react";
import { Heading, IHeadingProps } from "./Heading";

const MDXComponents = {
  h1: (props: IHeadingProps) => <Heading {...props} />,
};

export default MDXComponents;
