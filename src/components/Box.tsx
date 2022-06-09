import { MEDIA_BREAKPOINTS } from "@/config/media-queries";
import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface IBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  color?: "primary" | "secondary";
  texture?: "lg1" | "lg2" | "lg3" | "rg1" | "rg2" | "rg3";
  isResponsive?: boolean;
}

const StyledBox = styled.div<IBoxProps>`
  --box-bg-color: transparent;
  --box-border-radius: 16px;
  --box-padding: 24px;

  border-radius: var(--box-border-radius);
  background-image: var(--box-bg-image);
  padding: var(--box-padding);

  @media ${MEDIA_BREAKPOINTS.md} {
    --box-padding: 40px;
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
      : css`
          background-color: var(--box-bg-color);
        `}

  ${({ color }) =>
    color === "primary"
      ? css`
          --box-bg-color: var(--box-bg-primary);
        `
      : color === "secondary"
      ? css`
          --box-bg-color: var(--box-bg-secondary);
        `
      : ""}

  ${({ isResponsive }) =>
    isResponsive
      ? css`
          --box-border-radius: 0px;

          @media ${MEDIA_BREAKPOINTS.md} {
            --box-border-radius: 16px;
          }
        `
      : ""}

  ${({ color, texture }) =>
    !color && !texture
      ? css`
          --box-padding: 0px 24px;

          @media ${MEDIA_BREAKPOINTS.md} {
            --box-padding: 0px;
          }
        `
      : ""}
`;

export const Box: React.FC<IBoxProps> = ({ children, ...props }) => {
  return <StyledBox {...props}>{children}</StyledBox>;
};
