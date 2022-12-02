import { MEDIA_BREAKPOINTS } from "@config/media-queries";
import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

interface CardProps extends React.HTMLAttributes<HTMLDivElement | HTMLAnchorElement> {
  children?: ReactNode;
  isRounded?: boolean | "sm" | "md";
  isBordered?: boolean;
  href?: string;
}

const StyledCard = styled.div<CardProps>`
  --card-padding: 16px;

  --card-border-thickness: 0px;

  --card-border-radius: 0;
  --card-border-radius--rounded: var(--border-radius--surface);
  --card-border-width: var(--card-border-thickness) 0px;
  --card-border: var(--card-border-thickness) solid var(--border-color--base);

  --card-bg: var(--surface-bg--raised);
  --card-bg--hover: var(--surface-bg--hover);

  border-radius: var(--card-border-radius);
  background: var(--card-bg);
  border: var(--card-border);
  border-width: var(--card-border-width);
  color: var(--body-color);

  transition: box-shadow 0.15s, background-color 0.15s, border-color 0.15s;
  box-sizing: border-box;
  overflow: hidden;

  display: grid;
  gap: var(--card-padding);
  grid-template-columns: auto 1fr;
  grid-template-areas: "media content" "footer footer";
  align-items: center;
  padding: var(--card-padding);

  @media ${MEDIA_BREAKPOINTS.md} {
    padding: 0;
    grid-template-areas:
      "media content"
      "media footer";
  }

  ${({ isRounded }) =>
    isRounded === true
      ? css`
          --card-border-radius: var(--card-border-radius--rounded);
          --card-border-width: var(--card-border-thickness);
        `
      : isRounded === "sm"
      ? css`
          @media ${MEDIA_BREAKPOINTS.sm} {
            --card-border-radius: var(--card-border-radius--rounded);
            --card-border-width: var(--card-border-thickness);
          }
        `
      : isRounded === "md"
      ? css`
          @media ${MEDIA_BREAKPOINTS.md} {
            --card-border-radius: var(--card-border-radius--rounded);
            --card-border-width: var(--card-border-thickness);
          }
        `
      : ""}

  ${({ href }) =>
    href
      ? css`
          &:hover,
          &:focus-visible {
            --card-border: var(--card-border-thickness) solid var(--border-color--hover);
            --card-bg: var(--card-bg--hover);
          }
        `
      : ""}

      ${({ isBordered }) =>
    isBordered === true
      ? css`
          --card-border-thickness: 1px;
        `
      : ""}
`;

export const Card: React.FC<CardProps> = ({ href, ...props }) => {
  return (
    <StyledCard
      as={href ? "a" : "div"}
      href={href}
      {...props}
    />
  );
};
