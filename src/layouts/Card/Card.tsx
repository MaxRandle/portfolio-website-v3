import { MEDIA_BREAKPOINTS } from "@/config/media-queries";
import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { CardMedia, CardContent } from "./index";

interface IBoxProps extends React.HTMLAttributes<HTMLDivElement | HTMLAnchorElement> {
  children?: ReactNode;
  isResponsive?: boolean;
  href?: string;
}

const StyledCard = styled.div<IBoxProps>`
  --card-padding: 16px;
  --card-border-radius: var(--border-radius-base);

  border-radius: var(--card-border-radius);
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  color: var(--body-color);

  transition: box-shadow 0.15s;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;

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
            box-shadow: var(--hover-ring-box-shadow);
          }
          &:focus-visible {
            outline: var(--focus-ring-outline);
          }
        `
      : ""}
`;

const StyledContentContainer = styled.div`
  padding: var(--card-padding);

  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > * + * {
    margin-top: var(--card-padding);
  }
`;

export const Card: React.FC<IBoxProps> = ({ href, children, ...props }) => {
  let hasMedia = false;

  let CardMediaComponent: ReactNode;
  let CardContentComponent: ReactNode;

  React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === CardMedia) {
        CardMediaComponent = child;
        hasMedia = true;
      }
      if (child.type === CardContent) {
        CardContentComponent = child;
      }

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
    >
      {hasMedia ? CardMediaComponent : null}
      <StyledContentContainer>{CardContentComponent}</StyledContentContainer>
    </StyledCard>
  );
};

// DEMO:

/*

<Card
  isResponsive
  key={meta.slug}
  href={`/projects/${meta.slug}`}
>
  <CardMedia className="w-24 sm:w-40 h-24 sm:h-40">
    <Figure
      className="bg-purple-200"
      alt="seal"
      src="/media/seal1.png"
    />
  </CardMedia>
  <CardContent className="space-y-4">
    <Heading level={4}>{meta.title}</Heading>
    <Typography>{meta.summary}</Typography>
    <Typography
      variant="caption"
      palette="faded"
      style={{ textTransform: "uppercase" }}
    >
      {meta.tags.join(" | ")}
    </Typography>
  </CardContent>
</Card>

*/
