import { MEDIA_BREAKPOINTS } from "@/config/media-queries";
import { ReactNode } from "react";
import styled, { css } from "styled-components";

export interface IMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  layout?: "reverse";
}

const StyledMedia = styled.div<IMediaProps>`
  --media-grid-gap: 24px;
  --media-flex-gap: 40px;

  @media ${MEDIA_BREAKPOINTS.sm} {
    --media-flex-gap: 64px;
  }

  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: var(--media-flex-gap);
  }

  @media ${MEDIA_BREAKPOINTS.lg} {
    --media-grid-gap: 40px;
    --media-flex-gap: 0px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--media-grid-gap);

    ${({ layout }) =>
      layout === "reverse"
        ? css`
            grid-template-areas:
              "media header"
              "media content";
          `
        : css`
            grid-template-areas:
              "header media"
              "content media";
          `}
  }
`;

export const Media: React.FC<IMediaProps> = ({ children, ...props }) => {
  return <StyledMedia {...props}>{children}</StyledMedia>;
};
