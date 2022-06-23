import { useRef, useState } from "react";
import styled, { css } from "styled-components";

export interface IProjectEmbedProps extends React.HTMLAttributes<HTMLIFrameElement> {
  isFullWidth?: boolean;
  contentWidth?: number;
  contentHeight?: number;
}

const StyledProjectEmbed = styled.iframe<IProjectEmbedProps>`
  ${({ contentWidth, contentHeight }) => css`
    width: ${contentWidth}px;
    height: ${contentHeight}px;
  `}

  ${({ isFullWidth }) =>
    isFullWidth
      ? css`
          width: 100%;
        `
      : ""}
`;

export const ProjectEmbed: React.FC<IProjectEmbedProps> = ({ ...props }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [contentWidth, setContentWidth] = useState<number | undefined>(0);
  const [contentHeight, setContentHeight] = useState<number | undefined>(0);

  return (
    <StyledProjectEmbed
      ref={iframeRef}
      contentWidth={contentWidth}
      contentHeight={contentHeight}
      onLoad={() => {
        console.log("loaded");
        console.log(iframeRef?.current?.contentWindow?.document.body.scrollWidth);
        setContentWidth(iframeRef?.current?.contentWindow?.document.body.scrollWidth);
        setContentHeight(iframeRef?.current?.contentWindow?.document.body.scrollHeight);
      }}
      {...props}
    />
  );
};
