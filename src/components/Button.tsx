import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children?: ReactNode;
  variant?: "default" | "outline" | "inline";
  palette?: "primary" | "secondary";
  href?: string;
  IconRight?: React.FC;
  IconLeft?: React.FC;
}

const StyledButton = styled.button<Pick<ButtonProps, "palette">>`
  appearance: none;
  text-decoration: none;
  box-sizing: border-box;
  user-select: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: var(--typography-button-weight);

  letter-spacing: var(--typography-button-spacing);

  & > * + * {
    margin-left: 16px;
  }

  ${({ palette }) =>
    palette === "primary"
      ? css`
          color: var(--primary-500);
        `
      : ""}
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
