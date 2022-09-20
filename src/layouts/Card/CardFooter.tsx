import styled from "styled-components";

type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;

const StyledCardFooter = styled.div<CardFooterProps>`
  grid-area: footer;
`;

export const CardFooter: React.FC<CardFooterProps> = StyledCardFooter;
