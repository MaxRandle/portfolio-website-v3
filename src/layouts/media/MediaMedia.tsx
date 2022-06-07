import { MEDIA_BREAKPOINTS } from "@/config/media-queries";
import { ReactNode } from "react";
import styled from "styled-components";

export interface IMediaMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const StyledMediaMedia = styled.div`
  @media ${MEDIA_BREAKPOINTS.lg} {
    grid-area: media;
    align-self: center;
  }
`;

export const MediaMedia: React.FC<IMediaMediaProps> = ({ children, ...props }) => {
  return <StyledMediaMedia {...props}>{children}</StyledMediaMedia>;
};
