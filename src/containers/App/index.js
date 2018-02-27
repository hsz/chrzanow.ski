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
  background: url(${background}) fixed center;
`;

const StyledProjects = styled(Projects)`
  background-color: rgba(0, 0, 0, .25);
  padding: 1rem;
`;

const StyledExperiences = styled(Experiences)`
  background-color: rgba(0, 0, 0, .5);
  padding: 1rem;
`;

const App = () => (
  <Wrapper className="ibm">
    <Header />
    <Socials />
    <StyledProjects />
    <StyledExperiences />
  </Wrapper>
);

export default App;
