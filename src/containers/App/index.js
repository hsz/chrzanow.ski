import React, { Component } from 'react';
import styled from 'styled-components';
import { Header, Socials, Projects, Experiences } from 'containers';
import background from './assets/background.jpg';

const Wrapper = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background: url(${background}) fixed center;
`;

class App extends Component {
  render() {
    return (
      <Wrapper className="ibm">
        <Header />
        <Socials />
        <Projects />
        <Experiences />
      </Wrapper>
    );
  }
}

export default App;
