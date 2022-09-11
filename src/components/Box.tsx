import { MEDIA_BREAKPOINTS } from "@config/media-queries";
import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface IBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  palette?: "base" | "primary";
  texture?: "lg1" | "lg2" | "lg3" | "rg1" | "rg2" | "rg3";
  isRounded?: boolean | "sm" | "md";
  elevation?: 1 | 2;
  isPadded?: boolean;
}

const StyledBox = styled.div<IBoxProps>`
  --box-bg-color: transparent;
  --box-border-radius: 0px;
  --box-border-radius--rounded: var(--border-radius--surface);
  --box-padding: 0;
  --box-padding--md: 0;
  --box-bg-image: var(--box-bg-color);
  --box-box-shadow: none;

  border-radius: var(--box-border-radius);
  background: var(--box-bg-image);
  padding: var(--box-padding);
  box-shadow: var(--box-box-shadow);

  @media ${MEDIA_BREAKPOINTS.md} {
    --box-padding: var(--box-padding--md);
  }

  ${({ texture }) =>
    texture === "lg1"
      ? css`
          --box-bg-image: linear-gradient(30deg, transparent -5%, 90%, var(--box-bg-color) 105%);
        `
      : texture === "lg2"
      ? css`
          --box-bg-image: linear-gradient(0deg, transparent -5%, 90%, var(--box-bg-color) 105%);
        `
      : texture === "lg3"
      ? css`
          --box-bg-image: linear-gradient(270deg, transparent -50%, 100%, var(--box-bg-color) 135%);
        `
      : texture === "rg1"
      ? css`
          --box-bg-image: radial-gradient(transparent -5%, 90%, var(--box-bg-color) 102%);
        `
      : texture === "rg2"
      ? css`
          --box-bg-image: radial-gradient(ellipse farthest-corner at 35% 65%, transparent -5%, 90%, var(--box-bg-color) 102%);
        `
      : texture === "rg3"
      ? css`
          --box-bg-image: radial-gradient(ellipse farthest-corner at 65% 65%, transparent -5%, 90%, var(--box-bg-color) 102%);
        `
      : ""}

  ${({ palette }) =>
    palette === "base"
      ? css`
          --box-bg-color: var(--surface-bg--raised);
        `
      : palette === "primary"
      ? css`
          --box-bg-color: var(--surface-bg--primary);
        `
      : ""}

  ${({ isRounded }) =>
    isRounded === true
      ? css`
          --box-border-radius: var(--box-border-radius--rounded);
        `
      : isRounded === "sm"
      ? css`
          @media ${MEDIA_BREAKPOINTS.sm} {
            --box-border-radius: var(--box-border-radius--rounded);
          }
        `
      : isRounded === "md"
      ? css`
          @media ${MEDIA_BREAKPOINTS.md} {
            --box-border-radius: var(--box-border-radius--rounded);
          }
        `
      : ""}

  ${({ elevation }) =>
    elevation === 1
      ? css`
          --box-box-shadow: var(--shadows--low);
        `
      : elevation === 2
      ? css`
          --box-box-shadow: var(--shadows--high);
        `
      : ""}

  ${({ isPadded }) =>
    isPadded
      ? css`
          --box-padding: 24px;
          --box-padding--md: 40px;
        `
      : ""}
`;

export const Box: React.FC<IBoxProps> = StyledBox;
StyledBox.defaultProps = { isPadded: true };
