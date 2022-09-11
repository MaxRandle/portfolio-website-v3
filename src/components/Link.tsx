import NextLink, { LinkProps as NextLinkProps } from "next/link";
import styled from "styled-components";

interface LinkProps extends NextLinkProps {
  //
}

const StyledLink = styled(NextLink)`
  font-weight: var(--text-font-weight--link);
  color: var(--text-color--primary);
`;

export const Link: React.FC<LinkProps> = StyledLink;
