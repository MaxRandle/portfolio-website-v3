import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

interface IFigureProps extends React.HTMLAttributes<HTMLDivElement> {
  radius?: "sm";
  aspectRatio?: "1:1" | "5:3";
  children?: ReactNode;
  src: string;
  alt: string;
}

export const StyledFigure = styled.figure<Pick<IFigureProps, "radius" | "aspectRatio">>`
  --figure-border-radius: 0rem;
  --figure-padding-bottom: 100%;

  position: relative;
  overflow: hidden;
  border-radius: var(--figure-border-radius);
  padding-bottom: var(--figure-padding-bottom);

  ${({ radius }) =>
    radius === "sm"
      ? css`
          --figure-border-radius: 1rem;
        `
      : ""}

  ${({ aspectRatio }) =>
    aspectRatio === "1:1"
      ? css`
          --figure-padding-bottom: 100%;
        `
      : aspectRatio === "5:3"
      ? css`
          --figure-padding-bottom: 60%;
        `
      : ""}
`;

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledOverlay = styled.div`
  border: 0;
  padding: 32px;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;

  &:hover {
    opacity: 1;
  }
`;

export const Figure: React.FC<IFigureProps> = ({ className, src, alt, radius, aspectRatio = "1:1", children, ...props }: IFigureProps) => {
  const kitten = {
    "1:1": "http://placekitten.com/200/200",
    "5:3": "http://placekitten.com/250/150",
  }[aspectRatio];

  return (
    <StyledFigure
      className={className}
      radius={radius}
      aspectRatio={aspectRatio}
      {...props}
    >
      <StyledImage
        draggable="false"
        src={src || kitten}
        alt={alt}
      />
      {children ? <StyledOverlay>{children}</StyledOverlay> : null}
    </StyledFigure>
  );
};
