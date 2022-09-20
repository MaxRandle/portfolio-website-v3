import styled from "styled-components";

type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

const StyledCardContent = styled.div<CardContentProps>`
  grid-area: content;
`;

export const CardContent: React.FC<CardContentProps> = StyledCardContent;
