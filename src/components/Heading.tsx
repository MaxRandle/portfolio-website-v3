import styled, { css } from "styled-components";

export interface IHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3;
  palette?: "base" | "weak";
}

const StyledHeading = styled.h3<IHeadingProps>`
  font-size: var(--text-font-size);
  color: var(--heading-color);

  ${({ level }) =>
    level === 1
      ? css`
          --text-font-size: var(--text-font-size--h1);
        `
      : level === 2
      ? css`
          --text-font-size: var(--text-font-size--h2);
        `
      : level === 3
      ? css`
          --text-font-size: var(--text-font-size--h3);
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
