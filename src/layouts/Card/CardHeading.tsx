import { Heading, IHeadingProps } from "@/components/Heading";
import { ReactNode } from "react";
import styled from "styled-components";

interface ICardHeadingProps extends IHeadingProps {
  children?: ReactNode;
}

const StyledCardHeading = styled(Heading)<ICardHeadingProps>``;

export const CardHeading: React.FC<ICardHeadingProps> = ({ children, ...props }) => {
  return (
    <StyledCardHeading
      level={4}
      {...props}
    >
      {children}
    </StyledCardHeading>
  );
};
