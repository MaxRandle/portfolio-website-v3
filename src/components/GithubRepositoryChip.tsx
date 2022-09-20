import { SiGithub } from "react-icons/si";
import { BsFillStarFill } from "react-icons/bs";
import styled from "styled-components";
import { useEffect, useState } from "react";

interface IGithubRepositoryChipProps extends React.HTMLAttributes<HTMLAnchorElement> {
  repo: string;
}

const StyledAnchor = styled.a`
  background-color: black;
  color: white;
  padding: 12px 20px;

  border-radius: 9999px;
  display: inline-flex;
  align-items: center;

  max-width: 272px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  & > * + * {
    margin-left: 0.5rem;
  }

  & > svg {
    flex-shrink: 0;
  }
`;

const TruncatedText = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const GithubRepositoryChip: React.FC<IGithubRepositoryChipProps> = ({ repo, ...props }) => {
  const REPOSITORY_LINK = "https://github.com/" + repo;
  const [stargazersCount, setStargazersCount] = useState();

  useEffect(() => {
    const fetchRepoMetadata = async () => {
      const res = await fetch("https://api.github.com/repos/" + repo);
      const body = await res.json();
      setStargazersCount(body.stargazers_count);
    };

    fetchRepoMetadata();
  }, [repo]);

  return (
    <StyledAnchor
      href={REPOSITORY_LINK}
      target="_blank"
      {...props}
    >
      <SiGithub />
      <TruncatedText>{repo}</TruncatedText>
      <BsFillStarFill color="gold" />
      <p>{stargazersCount}</p>
    </StyledAnchor>
  );
};
