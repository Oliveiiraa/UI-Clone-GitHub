import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeName } from '../../styles/themes';

import { Container, GithubLogo, SearchForm } from './styles';

interface Props {
  themeName: ThemeName;
  setThemeName: (newname: ThemeName) => void;
}

const Header: React.FC<Props> = ({themeName, setThemeName}) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSubmite(event: React.FormEvent){
    event.preventDefault();

    navigate('/' + search.toLowerCase().trim());
  }

  function toggleTheme() {
    setThemeName(themeName == 'light' ? 'dark': 'light');
  }

  return(
    <Container>
      <GithubLogo onClick={toggleTheme}/>
      <SearchForm onSubmit={handleSubmite}>
        <input 
          placeholder="Enter Username or Repo..."
          value={search}
          onChange={ e => setSearch(e.currentTarget.value)}
        />
      </SearchForm>
    </Container>
  );
}

export default Header;