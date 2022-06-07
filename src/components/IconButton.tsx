import { ReactNode } from "react";
import styled from "styled-components";

export interface IIconButtonProps extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  onClick?: () => void;
  href?: string;
  children?: ReactNode;
}

const StyledIconButton = styled.button<IIconButtonProps>`
  --size: 4rem;

  position: relative;
  width: var(--size);
  height: var(--size);
  border-radius: 1rem;

  background: var(--body-bg);

  /* box-shadow: 0px 0px 5px; */

  & > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const IconButton: React.FC<IIconButtonProps> = ({ children, ...props }) => {
  return <StyledIconButton {...props}>{children}</StyledIconButton>;
};
