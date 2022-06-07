import { AppFooter } from "@/components/AppFooter";
import { AppHeader } from "@/components/AppHeader";
import { ReactNode } from "react";
import styled from "styled-components";

export interface IPageProps {
  children: ReactNode;
}

const StyledPage = styled.div<IPageProps>`
  min-height: 100vh;
  position: relative;
  padding-bottom: 16rem;
`;

export const PageLayout: React.FC<IPageProps> = ({ children }) => {
  return (
    <StyledPage>
      <AppHeader />
      {children}
      <AppFooter />
    </StyledPage>
  );
};
