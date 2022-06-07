import { ReactNode } from "react";
import styled from "styled-components";

interface IGridReelTrackProps extends React.HTMLAttributes<HTMLUListElement> {
  children?: ReactNode;
}

const StyledGridReelTrack = styled.ul<IGridReelTrackProps>`
  display: flex;
  & > * {
    margin-left: var(--grid-reel-gap);
  }

  --grid-reel-track-item-width: calc(100% / 6);
  --grid-reel-track-offset: var(--grid-reel-track-item-width);
  &:nth-child(2n) {
    --grid-reel-track-offset: calc(-1 * var(--grid-reel-track-item-width));
  }

  @keyframes slide {
    100% {
      transform: translateX(var(--grid-reel-track-offset));
    }
  }

  transform: translateX(calc(-1 * var(--grid-reel-track-offset)));

  animation: slide 120s linear infinite;
`;

export const GridReelTrack: React.FC<IGridReelTrackProps> = ({ children, ...props }) => {
  return (
    <StyledGridReelTrack {...props}>
      {children}
      {children}
      {children}
    </StyledGridReelTrack>
  );
};
