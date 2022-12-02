import NextLink, { LinkProps as NextLinkProps } from "next/link";
import styled from "styled-components";

export type LinkProps = Omit<NextLinkProps, "as"> & {
  children?: React.ReactNode;
  isExternal?: boolean;
};

const StyledNextLink = styled(NextLink)`
  font-weight: var(--text-font-weight--link);
  color: var(--text-color--primary);
`;

export const Link: React.FC<LinkProps> = ({ isExternal, children, ...props }) => (
  <StyledNextLink
    passHref
    target={isExternal ? "_blank" : "_self"}
    {...props}
  >
    {children}
  </StyledNextLink>
);
