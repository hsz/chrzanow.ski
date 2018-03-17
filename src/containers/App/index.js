import React from 'react';
import { Header, Socials, Projects, Experiences } from 'containers';
import { Row, Col } from 'antd';
import glamorous from 'glamorous';
import background from './assets/background.jpg';

const Wrapper = glamorous.main({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundSize: 'cover',
  background: `url(${background}) fixed top`,
});

const StyledSection = (Component, opacity = 0) => glamorous(({ className }) => (
  <Row className={className} type="flex" justify="space-around">
    <Col xs={24} sm={12}>
      <Component />
    </Col>
  </Row>
))({
  width: '100%',
  backgroundColor: `rgba(0, 0, 0, ${opacity})`,
  padding: '1rem',
});

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
