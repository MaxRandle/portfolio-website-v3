import styled, { css } from "styled-components";

export interface IProjectEmbedProps extends React.HTMLAttributes<HTMLIFrameElement> {
  isFullWidth?: boolean;
  contentWidth?: number;
  contentHeight?: number;
}

const StyledProjectEmbed = styled.iframe<IProjectEmbedProps>`
  ${({ contentWidth }) =>
    contentWidth
      ? css`
          width: ${contentWidth}px;
        `
      : ""}

  ${({ contentHeight }) =>
    contentHeight
      ? css`
          height: ${contentHeight}px;
        `
      : ""}

  ${({ isFullWidth }) =>
    isFullWidth
      ? css`
          width: 100%;
        `
      : ""}
`;

export const ProjectEmbed: React.FC<IProjectEmbedProps> = ({ ...props }) => {
  return <StyledProjectEmbed {...props} />;
};
