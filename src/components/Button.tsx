import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children?: ReactNode;
  variant?: "default" | "inline";
  href?: string;
  IconRight?: React.FC;
  IconLeft?: React.FC;
}

const StyledButton = styled.button<ButtonProps>`
  --button-bg: var(--primary--base);
  --button-color: var(--text-color--on-primary);

  background: var(--button-bg);
  color: var(--button-color);
  letter-spacing: var(--text-letter-spacing--button);
  font-weight: var(--text-font-weight--button);

  cursor: pointer;
  appearance: none;
  text-decoration: none;
  user-select: none;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-right: 0.25rem;

  & > * + * {
    margin-left: 0.5rem;
  }

  ${({ variant }) =>
    variant === "inline"
      ? css`
          --button-bg: transparent;
          --button-color: var(--text-color--primary);
        `
      : ""}
`;

export const Button: React.FC<ButtonProps> = ({ children, href, IconLeft, IconRight, ...props }) => {
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
