import React from 'react';
import { mq, styled } from 'utils';
import logo from './assets/logo.png';

const Section = styled.section(
  mq({
    marginTop: ['2rem', '4rem'],
    marginBottom: [0, '2rem'],
  }),
);

const Logo = styled.img`
  display: block;
  margin: 0 auto;
`;

const Name = styled.h1`
  margin: 0 auto;
  text-align: center;
  font-weight: 600;

  ${mq({
    fontSize: ['2rem', '3rem'],
  })};
`;

const Header = () => (
  <Section>
    <Logo src={logo} alt="hsz" />
    <Name>Jakub Chrzanowski</Name>
  </Section>
);

export default Header;
