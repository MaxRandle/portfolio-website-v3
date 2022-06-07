import styled from "styled-components";

const StyledAppFooter = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 16rem;
  overflow: hidden;

  mask-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const StyledFooterBackground = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const AppFooter: React.FC = () => {
  return (
    <StyledAppFooter>
      <StyledFooterBackground
        src="/media/footer.jpeg"
        alt="stag silhouette"
      />
    </StyledAppFooter>
  );
};
