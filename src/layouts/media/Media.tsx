import { MEDIA_BREAKPOINTS } from "@config/media-queries";
import { ReactNode } from "react";
import styled, { css } from "styled-components";

export interface IMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  layout?: "reverse";
}

const StyledMedia = styled.div<IMediaProps>`
  --media-gap: 24px;
  --media-gap--md: 40px;

  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: var(--media-gap);
  }

  @media ${MEDIA_BREAKPOINTS.md} {
    --media-gap: var(--media-gap--md);
  }

  @media ${MEDIA_BREAKPOINTS.lg} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--media-gap);

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
