import styled, { css } from "styled-components";

export interface IHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3;
  palette?: "base" | "weak";
}

const StyledHeading = styled.h3<IHeadingProps>`
  font-size: var(--heading-font-size);
  font-weight: var(--heading-font-weight);
  line-height: var(--heading-line-height);
  color: var(--heading-color);

  ${({ level }) =>
    level === 1
      ? css`
          --heading-font-size: var(--text-font-size--h1);
          --heading-font-weight: var(--text-font-weight--h1);
          --heading-line-height: var(--text-line-height--h1);
        `
      : level === 2
      ? css`
          --heading-font-size: var(--text-font-size--h2);
          --heading-font-weight: var(--text-font-weight--h2);
          --heading-line-height: var(--text-line-height--h2);
        `
      : level === 3
      ? css`
          --heading-font-size: var(--text-font-size--h3);
          --heading-font-weight: var(--text-font-weight--h3);
          --heading-line-height: var(--text-line-height--h3);
        `
      : ""}

  ${({ palette }) =>
    palette === "base"
      ? css`
          --heading-color: var(--text-color--base);
        `
      : palette === "weak"
      ? css`
          --heading-color: var(--text-color--weak);
        `
      : ""}
`;

export const Heading: React.FC<IHeadingProps> = ({ level = 1, ...props }) => {
  return (
    <StyledHeading
      as={`h${level}`}
      level={level}
      {...props}
    />
  );
};
