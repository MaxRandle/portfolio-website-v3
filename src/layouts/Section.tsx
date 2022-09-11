import { MEDIA_BREAKPOINTS } from "@config/media-queries";
import { ReactNode } from "react";
import styled, { css } from "styled-components";

export interface ISectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  palette?: "base" | "primary";
  size?: "sm" | "lg";
}

const StyledSection = styled.div<ISectionProps>`
  --section-bg: transparent;
  --section-spacing: 4rem;
  --section-margin-y: var(--section-spacing);
  --section-padding-y: 0;

  background: var(--section-bg);
  margin-top: calc(var(--section-margin-y) / 1.5);
  margin-bottom: var(--section-margin-y);
  padding: var(--section-padding-y) 0;
  width: 100%;

  ${({ size }) =>
    size === "lg"
      ? css`
          @media ${MEDIA_BREAKPOINTS.lg} {
            --section-spacing: 8rem;
          }
        `
      : ""}

  ${({ palette }) =>
    palette
      ? css`
          --section-margin-y: 0;
          --section-padding-y: var(--section-spacing);
        `
      : ""}

  ${({ palette }) =>
    palette === "base"
      ? css`
          --section-bg: var(--surface-bg--raised);
        `
      : palette === "primary"
      ? css`
          --section-bg: var(--surface-bg--primary);
        `
      : ""}
`;

export const Section: React.FC<ISectionProps> = StyledSection;
StyledSection.defaultProps = { size: "lg" };
