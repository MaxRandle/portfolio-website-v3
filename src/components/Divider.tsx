import styled from "styled-components";

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  //
}

const StyledDivider = styled.hr<DividerProps>`
  border-color: var(--border-color--base);
`;

export const Divider = StyledDivider;
