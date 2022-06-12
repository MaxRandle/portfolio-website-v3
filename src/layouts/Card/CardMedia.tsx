import { ReactNode } from "react";
import styled from "styled-components";

interface ICardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const StyledCardMedia = styled.div<ICardMediaProps>``;

export const CardMedia: React.FC<ICardMediaProps> = ({ children, ...props }) => {
  return <StyledCardMedia {...props}>{children}</StyledCardMedia>;
};
