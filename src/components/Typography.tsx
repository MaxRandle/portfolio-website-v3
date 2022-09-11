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

  ${({ variant }) =>
    variant === "subheading"
      ? css`
          --text-font-size: var(--text-font-size--subheading);
          --text-font-weight: var(--text-font-weight--subheading);
        `
      : variant === "body"
      ? css`
          --text-font-size: var(--text-font-size--body);
          --text-font-weight: var(--text-font-weight--body);
        `
      : variant === "caption"
      ? css`
          --text-font-size: var(--text-font-size--caption);
          --text-font-weight: var(--text-font-weight--caption);
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
