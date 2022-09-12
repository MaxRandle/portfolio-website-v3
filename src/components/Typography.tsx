import styled, { css } from "styled-components";

export interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
  variant?: "subheading" | "body" | "caption";
  palette?: "base" | "weak";
  as?: "p" | "span";
}

const StyledTypography = styled.p<TypographyProps>`
  font-size: var(--text-font-size);
  color: var(--typography-color);
  font-weight: var(--text-font-weight);
  line-height: var(--text-line-height);

  ${({ variant }) =>
    variant === "subheading"
      ? css`
          --text-font-size: var(--text-font-size--subheading);
          --text-font-weight: var(--text-font-weight--subheading);
          --text-line-height: var(--text-line-height--subheading);
        `
      : variant === "body"
      ? css`
          --text-font-size: var(--text-font-size--body);
          --text-font-weight: var(--text-font-weight--body);
          --text-line-height: var(--text-line-height--body);
        `
      : variant === "caption"
      ? css`
          --text-font-size: var(--text-font-size--caption);
          --text-font-weight: var(--text-font-weight--caption);
          --text-line-height: var(--text-line-height--caption);
        `
      : ""}

  ${({ palette }) =>
    palette === "base"
      ? css`
          --typography-color: var(--text-color--base);
        `
      : palette === "weak"
      ? css`
          --typography-color: var(--text-color--weak);
        `
      : ""}
`;

export const Typography: React.FC<TypographyProps> = StyledTypography;
Typography.defaultProps = { variant: "body", palette: "base" };
