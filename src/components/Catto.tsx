import styled from "styled-components";

interface ICattoProps extends React.HTMLAttributes<HTMLImageElement> {
  //
}

const StyledCattoImg = styled.img`
  width: 240px;
  height: 140px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
`;

export const Catto: React.FC<ICattoProps> = ({ ...props }) => {
  return (
    <StyledCattoImg
      {...props}
      src="/media/catto-transparent.png"
      alt="cat peeking"
    />
  );
};
