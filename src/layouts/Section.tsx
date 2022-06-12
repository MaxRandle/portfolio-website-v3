import { MEDIA_BREAKPOINTS } from "@/config/media-queries";
import { ReactNode } from "react";
import styled, { css } from "styled-components";

export interface ISectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  palette?: "primary" | "secondary";
  texture?: "lg1" | "lg2" | "lg3" | "lg4";
  size?: "sm" | "lg";
}

const StyledSection = styled.div<ISectionProps>`
  --section-bg-color: transparent;

  --section-padding-top: 0;
  --section-padding-bottom: 0;
  --section-margin-top: var(--section-spacing);
  --section-margin-bottom: var(--section-spacing);

  background-image: var(--section-bg-image);

  margin-top: var(--section-margin-top);
  margin-bottom: var(--section-margin-bottom);
  padding-top: var(--section-padding-top);
  padding-bottom: var(--section-padding-bottom);

  width: 100%;

  ${({ size }) =>
    size === "lg"
      ? css`
          @media ${MEDIA_BREAKPOINTS.lg} {
            --section-margin-bottom: calc(2 * var(--section-spacing));
          }
        `
      : ""}

  ${({ palette }) =>
    palette
      ? css`
          --section-margin-top: 0;
          --section-margin-bottom: 0;
          --section-padding-top: var(--section-spacing);
          --section-padding-bottom: var(--section-spacing);

          @media ${MEDIA_BREAKPOINTS.lg} {
            --section-padding-bottom: calc(2 * var(--section-spacing));
          }
        `
      : ""}

  ${({ texture }) =>
    texture === "lg1"
      ? css`
          --section-bg-image: linear-gradient(var(--section-bg-color), 30%, transparent);
        `
      : texture === "lg2"
      ? css`
          --section-bg-image: linear-gradient(to left, var(--section-bg-color), 30%, transparent);
        `
      : texture === "lg3"
      ? css`
          --section-bg-image: linear-gradient(to top, var(--section-bg-color), 30%, transparent);
        `
      : texture === "lg4"
      ? css`
          --section-bg-image: linear-gradient(to right, var(--section-bg-color), 30%, transparent);
        `
      : css`
          background-color: var(--section-bg-color);
        `}

  ${({ palette }) =>
    palette === "primary"
      ? css`
          --section-bg-color: var(--section-bg-primary);
        `
      : palette === "secondary"
      ? css`
          --section-bg-color: var(--section-bg-secondary);
        `
      : ""}
`;

export const Section: React.FC<ISectionProps> = ({ size = "lg", children, ...props }) => {
  return (
    <StyledSection
      size={size}
      {...props}
    >
      {children}
    </StyledSection>
  );
};
