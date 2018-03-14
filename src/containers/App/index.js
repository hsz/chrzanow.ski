import React from 'react';
import { Header, Socials, Projects, Experiences } from 'containers';
import styled from 'styled-components';
import background from './assets/background.jpg';

const Wrapper = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background: url(${background}) fixed top;
`;

const StyledSection = (Component, opacity = 0) => styled(Component)`
  background-color: rgba(0, 0, 0, ${opacity});
  padding: 1rem;
`;

const StyledSocials = StyledSection(Socials);
const StyledProjects = StyledSection(Projects, .25);
const StyledExperiences = StyledSection(Experiences, .5);

const App = () => (
  <Wrapper className="ibm">
    <Header />
    <StyledSocials />
    <StyledProjects />
    <StyledExperiences />
  </Wrapper>
);

export default App;
