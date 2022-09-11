import styled from "styled-components";

type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

const StyledCardContent = styled.div<CardContentProps>``;

export const CardContent: React.FC<CardContentProps> = StyledCardContent;
