import styled from "styled-components";

interface ISealsProps extends React.HTMLAttributes<HTMLDivElement> {
  //
}

const StyledSeals = styled.img`
  background: var(--box-bg-primary);
  /* background: radial-gradient(closest-side, var(--box-bg-primary) -45%, 60%, transparent 145%); */

  border-radius: 1rem;
`;

export const Seals: React.FC<ISealsProps> = ({ ...props }) => {
  return (
    <StyledSeals
      {...props}
      src="media/seals.png"
      alt="seal silhouette"
    ></StyledSeals>
  );
};
