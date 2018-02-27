import React from 'react';
import logo from './assets/logo.png';
import styled from 'styled-components';

const Logo = styled.img`
  display: block;
  margin: 0 auto;
`;

const Name = styled.h1`
  margin: 0 auto 1rem;
  font-weight: 600;
`;

const Header = () => (
  <section>
    <Logo src={logo} alt="hsz" />
    <Name>Jakub Chrzanowski</Name>
  </section>
);

export default Header;
