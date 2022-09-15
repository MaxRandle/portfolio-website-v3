import { MEDIA_BREAKPOINTS } from "@config/media-queries";
import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { CardMedia, CardContent } from "./index";

interface CardProps extends React.HTMLAttributes<HTMLDivElement | HTMLAnchorElement> {
  children?: ReactNode;
  isRounded?: boolean | "sm" | "md";
  href?: string;
}

const StyledCard = styled.div<CardProps>`
  --card-padding: 16px;

  --card-border-radius: 0;
  --card-border-radius--rounded: var(--border-radius--surface);
  --card-border-width: 1px 0px;
  --card-border: 1px solid var(--border-color--base);

  --card-bg: var(--surface-bg--raised);
  --card-bg--hover: var(--surface-bg--hover);

  border-radius: var(--card-border-radius);
  background: var(--card-bg);
  border: var(--card-border);
  border-width: var(--card-border-width);
  color: var(--body-color);

  transition: box-shadow 0.15s, background-color 0.15s;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;

  ${({ isRounded }) =>
    isRounded === true
      ? css`
          --card-border-radius: var(--card-border-radius--rounded);
          --card-border-width: 1px;
        `
      : isRounded === "sm"
      ? css`
          @media ${MEDIA_BREAKPOINTS.sm} {
            --card-border-radius: var(--card-border-radius--rounded);
            --card-border-width: 1px;
          }
        `
      : isRounded === "md"
      ? css`
          @media ${MEDIA_BREAKPOINTS.md} {
            --card-border-radius: var(--card-border-radius--rounded);
            --card-border-width: 1px;
          }
        `
      : ""}

  ${({ href }) =>
    href
      ? css`
          &:hover,
          &:focus-visible {
            box-shadow: var(--shadows--hover);
            --card-border: 1px solid var(--border-color--hover);
            --card-bg: var(--card-bg--hover);
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

export const Card: React.FC<CardProps> = ({ href, children, ...props }) => {
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
  isRounded
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
