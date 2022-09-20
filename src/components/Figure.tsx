import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

interface IFigureProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  isRounded?: boolean;
  isCircular?: boolean;
  aspectRatio?: "1:1" | "5:3";
  children?: ReactNode;
}

export const StyledFigure = styled.figure<Pick<IFigureProps, "isRounded" | "isCircular" | "aspectRatio">>`
  --figure-border-radius: 0;
  --figure-border-radius--rounded: var(--border-radius--surface);

  --figure-padding-bottom: 100%;

  position: relative;
  overflow: hidden;
  border-radius: var(--figure-border-radius);
  padding-bottom: var(--figure-padding-bottom);
  background-color: var(--surface-bg--primary);

  ${({ isRounded }) =>
    isRounded
      ? css`
          --figure-border-radius: var(--figure-border-radius--rounded);
        `
      : ""}

  ${({ isCircular }) =>
    isCircular
      ? css`
          --figure-border-radius--rounded: 9999px;
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

// TODO replace img with Next/Image

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
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

export const Figure: React.FC<IFigureProps> = ({ src, alt, aspectRatio = "1:1", children, ...props }: IFigureProps) => {
  const kitten = {
    "1:1": "http://placekitten.com/200/200",
    "5:3": "http://placekitten.com/250/150",
  }[aspectRatio];

  return (
    <StyledFigure
      aspectRatio={aspectRatio}
      {...props}
    >
      <StyledImage
        draggable="false"
        src={src || kitten}
        alt={alt || "kitten"}
      />
      {children ? <StyledOverlay>{children}</StyledOverlay> : null}
    </StyledFigure>
  );
};
