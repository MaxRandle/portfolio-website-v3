import { ReactNode } from "react";
import styled from "styled-components";

interface IGridReelTrackItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children?: ReactNode;
}

const StyledGridReelTrackItem = styled.li<IGridReelTrackItemProps>`
  flex: 1 0 0;
`;

export const GridReelTrackItem: React.FC<IGridReelTrackItemProps> = ({ children, ...props }) => {
  return <StyledGridReelTrackItem {...props}>{children}</StyledGridReelTrackItem>;
};
