import styled from "styled-components";

interface IFoxProps extends React.HTMLAttributes<HTMLDivElement> {
  //
}

const StyledFox = styled.img`
  background: var(--box-bg-primary);

  border-radius: 1rem;
`;

export const Fox: React.FC<IFoxProps> = ({ ...props }) => {
  return (
    <StyledFox
      {...props}
      src="media/fox.png"
      alt="fox vector silhouette"
    ></StyledFox>
  );
};
