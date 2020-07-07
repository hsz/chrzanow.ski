import React from 'react';
import { mq, styled } from 'utils';

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

const Position = styled.h2`
  margin: 0 auto;
  text-align: center;
  opacity: 0.5;

  ${mq({
    fontSize: ['0.75rem', '1rem'],
  })};
`;

const Header = () => (
  <Section>
    <Logo src="/logo.webp" alt="hsz" />
    <Name>Jakub Chrzanowski</Name>
    <Position>Developer Advocate @JetBrains</Position>
  </Section>
);

export default Header;
