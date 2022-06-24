import { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children?: ReactNode;
  variant?: "default" | "outline" | "inline";
  palette?: "primary" | "secondary";
  href?: string;
  IconRight?: React.FC;
  IconLeft?: React.FC;
}

const StyledButton = styled.button<Pick<ButtonProps, "palette" | "variant">>`
  cursor: pointer;
  appearance: none;
  text-decoration: none;
  user-select: none;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-right: 0.25rem;
  border-radius: var(--border-radius-xs);

  letter-spacing: var(--typography-button-spacing);

  & > * + * {
    margin-left: 16px;
  }

  &:focus-visible {
    outline: var(--focus-ring-outline);
  }
`;

export const Button: React.FC<ButtonProps> = ({ children, variant, href, IconLeft, IconRight, ...props }) => {
  return (
    <StyledButton
      as={href ? "a" : "button"}
      href={href}
      {...props}
    >
      {IconLeft ? <IconLeft /> : null}
      <span>{children}</span>
      {IconRight ? <IconRight /> : null}
    </StyledButton>
  );
};
