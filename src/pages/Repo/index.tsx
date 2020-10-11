import React from 'react';
import {Link} from 'react-router-dom';

import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, ForkIcon, GithubIcon, LinkButton } from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon/>
        <Link className={'username'} to={'/oliveiiraa'}>
          oliveiiraa
        </Link>
        <span>/</span> 
        <Link className={'reponame'} to={'/oliveiira/teste'}>
          Teste Apenas
        </Link>
      </Breadcrumb>

      <p>É um teste apenas aqui para codar.</p>
      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>5</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github/oliveiiraa'}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;