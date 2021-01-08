import React from 'react';

import logoWhite from '../../assets/Logos/Mellow-white.svg';
import profile from '../../assets/Profile.jpeg';

import { Container, HeaderLinks } from './styles';

const Header: React.FC = () => (
  <Container>
    <img id="logo" src={logoWhite} alt="Mellow Logo" />
    <HeaderLinks>
      <a href="/">Recipes</a>
      <a href="/">Go Green</a>
      <a href="/">Pricing</a>
      <a href="/">How It Works</a>

      <div>
        <img src={profile} alt="profile" />
      </div>
    </HeaderLinks>
  </Container>
);

export default Header;
