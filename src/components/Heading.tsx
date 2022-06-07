import { ReactNode } from "react";
import styled, { css } from "styled-components";

export interface IHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
  children?: ReactNode;
}

const StyledHeading = styled.h3<IHeadingProps>`
  --font-size: var(--heading-level3-size);

  font-size: var(--font-size);
  line-height: var(--heading-line-height);

  ${({ level }) =>
    level === 1
      ? css`
          --font-size: var(--heading-level1-size);
        `
      : level === 2
      ? css`
          --font-size: var(--heading-level2-size);
        `
      : level === 3
      ? css`
          --font-size: var(--heading-level3-size);
        `
      : level === 4
      ? css`
          --font-size: var(--heading-level4-size);
        `
      : ""}
`;

export const Heading: React.FC<IHeadingProps> = ({ children, level = 3, ...props }) => {
  return (
    <StyledHeading
      as={`h${level}`}
      level={level}
      {...props}
    >
      {children}
    </StyledHeading>
  );
};
