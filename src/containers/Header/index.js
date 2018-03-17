import React from 'react';
import glamorous from 'glamorous';
import { media } from 'utils';
import logo from './assets/logo.png';

const Section = glamorous.section({
  [media.sm]: {
    marginTop: '2rem',
  },
});

const Logo = glamorous.img({
  display: 'block',
  margin: '0 auto',
});

const Name = glamorous.h1({
  margin: '0 auto',
  textAlign: 'center',
  fontWeight: 600,

  [media.sm]: {
    fontSize: '4rem',
  },
});

const Header = () => (
  <Section>
    <Logo src={logo} alt="hsz" />
    <Name>Jakub Chrzanowski</Name>
  </Section>
);

export default Header;
