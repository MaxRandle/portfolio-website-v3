import { MEDIA_BREAKPOINTS } from "@/config/media-queries";
import { ReactNode } from "react";
import styled from "styled-components";

export interface IMediaHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const StyledMediaHeader = styled.div`
  @media ${MEDIA_BREAKPOINTS.lg} {
    grid-area: header;
    align-self: flex-end;
  }
`;

export const MediaHeader: React.FC<IMediaHeaderProps> = ({ children, ...props }) => {
  return <StyledMediaHeader {...props}>{children}</StyledMediaHeader>;
};
