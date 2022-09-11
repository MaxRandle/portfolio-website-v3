import styled from "styled-components";

type CardMediaProps = React.HTMLAttributes<HTMLDivElement>;

const StyledCardMedia = styled.div<CardMediaProps>``;

export const CardMedia: React.FC<CardMediaProps> = StyledCardMedia;
