import { MEDIA_BREAKPOINTS } from "@config/media-queries";
import { ReactNode } from "react";
import styled from "styled-components";
import React from "react";

interface IGridReelProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const StyledGridReel = styled.div<IGridReelProps>`
  overflow: hidden;
`;

const StyledGridReelInner = styled.div`
  --grid-reel-gap: 1rem;
  --grid-reel-width: 220rem;

  position: relative;
  width: var(--grid-reel-width);
  left: 50%;
  transform: translateX(-50%);

  & > * + * {
    margin-top: var(--grid-reel-gap);
  }

  @media ${MEDIA_BREAKPOINTS.sm} {
    --grid-reel-width: 310rem;
  }

  @media ${MEDIA_BREAKPOINTS.lg} {
    --grid-reel-width: 375rem;
    --grid-reel-gap: 1rem;
  }
`;

export const GridReel: React.FC<IGridReelProps> = ({ children, ...props }) => {
  return (
    <StyledGridReel {...props}>
      <StyledGridReelInner>{children}</StyledGridReelInner>
    </StyledGridReel>
  );
};
