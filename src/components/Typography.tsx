import { ReactNode } from "react";
import styled, { css } from "styled-components";

export interface ITypographyProps extends React.HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
  variant?: "subheading" | "body" | "label" | "caption";
  color?: "primary" | "faded" | "rainbow" | "rainbow-reverse";
  children?: ReactNode;
  as?: "p" | "span";
}

const StyledTypography = styled.p<ITypographyProps>`
  --typography-size: var(--typography-body-size);
  --typography-color: var(--body-color);

  font-size: var(--typography-size);
  color: var(--typography-color);
  line-height: var(--typography-line-height);

  ${({ variant }) =>
    variant === "subheading"
      ? css`
          --typography-size: var(--typography-subheading-size);
        `
      : variant === "body"
      ? css`
          --typography-size: var(--typography-body-size);
        `
      : variant === "label"
      ? css`
          --typography-size: var(--typography-label-size);
        `
      : variant === "caption"
      ? css`
          --typography-size: var(--typography-caption-size);
        `
      : ""}

  ${({ color }) =>
    color === "primary"
      ? css`
          --typography-color: var(--primary-700);
        `
      : color === "faded"
      ? css`
          --typography-color: var(--base-600);
        `
      : color === "rainbow"
      ? css`
          background-image: repeating-linear-gradient(to right, magenta, cyan, magenta 160px);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        `
      : color === "rainbow-reverse"
      ? css`
          background-image: repeating-linear-gradient(to right, cyan, magenta, cyan 160px);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        `
      : ""}
`;

export const Typography: React.FC<ITypographyProps> = ({ children, ...props }) => {
  return <StyledTypography {...props}>{children}</StyledTypography>;
};
