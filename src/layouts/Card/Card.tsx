import { MEDIA_BREAKPOINTS } from "@/config/media-queries";
import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { CardMedia, CardContent, CardHeading } from "./index";

interface IBoxProps extends React.HTMLAttributes<HTMLDivElement | HTMLAnchorElement> {
  children?: ReactNode;
  isResponsive?: boolean;
  href?: string;
  hasMedia?: boolean;
  hasHeading?: boolean;
  hasContent?: boolean;
}

const StyledCard = styled.div<IBoxProps>`
  --card-padding: 16px;
  --card-border-radius: var(--border-radius-base);

  border-radius: var(--card-border-radius);
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  transition: 0.3s;
  box-sizing: border-box;
  overflow: hidden;

  ${({ hasMedia }) =>
    hasMedia
      ? css`
          display: grid;
          grid-gap: var(--card-padding);
          grid-template-areas: "media content";
        `
      : ""}

  ${({ hasHeading, hasMedia }) =>
    hasHeading && hasMedia
      ? css`
          grid-template-areas:
            "media none1 none1"
            "media heading none2"
            "media content none2"
            "media none3 none3";
        `
      : ""}

  ${({ isResponsive }) =>
    isResponsive
      ? css`
          --card-border-radius: 0px;

          @media ${MEDIA_BREAKPOINTS.md} {
            --card-border-radius: var(--border-radius-base);
          }
        `
      : ""}

  ${({ href }) =>
    href
      ? css`
          &:hover {
            border: 4px solid var(--secondary-500);
            margin: -3px;
          }
        `
      : ""}
`;

export const Card: React.FC<IBoxProps> = ({ href, children, ...props }) => {
  let hasMedia = false;
  let hasContent = false;
  let hasHeading = false;

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === CardMedia) hasMedia = true;
      if (child.type === CardContent) hasContent = true;
      if (child.type === CardHeading) hasHeading = true;

      return React.cloneElement(child, {});
    } else {
      return child;
    }
  });

  return (
    <StyledCard
      as={href ? "a" : "div"}
      href={href}
      {...props}
      hasMedia={hasMedia}
      hasHeading={hasHeading}
      hasContent={hasContent}
    >
      {childrenWithProps}
    </StyledCard>
  );
};
