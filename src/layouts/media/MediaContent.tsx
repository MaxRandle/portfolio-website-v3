import { MEDIA_BREAKPOINTS } from "@config/media-queries";
import { ReactNode } from "react";
import styled from "styled-components";

export interface IMediaContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const StyledMediaContent = styled.div`
  @media ${MEDIA_BREAKPOINTS.lg} {
    align-self: flex-start;
    grid-area: content;
  }
`;

export const MediaContent: React.FC<IMediaContentProps> = ({ children, ...props }) => {
  return <StyledMediaContent {...props}>{children}</StyledMediaContent>;
};
