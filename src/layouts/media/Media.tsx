import { MEDIA_BREAKPOINTS } from "@config/media-queries";
import { ReactNode } from "react";
import styled, { css } from "styled-components";

export interface IMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  layout?: "reverse";
}

const StyledMedia = styled.div<IMediaProps>`
  --media-gap: 24px;
  --media-flex-gap: var(--media-gap);
  --media-grid-gap: 0;

  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: var(--media-flex-gap);
  }

  @media ${MEDIA_BREAKPOINTS.md} {
    --media-gap: 40px;
  }

  @media ${MEDIA_BREAKPOINTS.lg} {
    --media-flex-gap: 0;
    --media-grid-gap: var(--media-gap);

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
