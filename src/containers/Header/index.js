import React from 'react';
import styled from 'styled-components';
import { media } from 'utils';
import logo from './assets/logo.png';

const Section = styled.section`
  ${media.greaterThan('sm')`
    margin-top: 2rem;
  `}
`;

const Logo = styled.img`
  display: block;
  margin: 0 auto;
`;

const Name = styled.h1`
  margin: 0 auto;
  font-weight: 600;
  
  ${media.greaterThan('sm')`
    font-size: 4rem;
  `}
`;

const Header = () => (
  <Section>
    <Logo src={logo} alt="hsz" />
    <Name>Jakub Chrzanowski</Name>
  </Section>
);

export default Header;
