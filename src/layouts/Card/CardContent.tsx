import { ReactNode } from "react";
import styled from "styled-components";

interface ICardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const StyledCardContent = styled.div<ICardContentProps>`
  grid-area: content;
`;

export const CardContent: React.FC<ICardContentProps> = ({ children, ...props }) => {
  return <StyledCardContent {...props}>{children}</StyledCardContent>;
};
