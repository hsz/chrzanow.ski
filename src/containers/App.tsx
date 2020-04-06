import { BackTop, Col, Row } from 'antd';
import { Header, Projects, Socials, Timeline } from 'containers';
import React, { FunctionComponent } from 'react';
import { styled } from 'utils';

const Wrapper = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background: url('/background.jpg') fixed top;
`;

const StyledSection = (Component: FunctionComponent, opacity = 0) =>
  styled(({ className }) => (
    <Row className={className} justify="space-around">
      <Col xs={24} sm={12}>
        <Component />
      </Col>
    </Row>
  ))`
    width: 100%;
    background-color: rgba(0, 0, 0, ${opacity});
    padding: 2rem 1rem;
  `;

const StyledSocials = StyledSection(Socials);
const StyledTimeline = StyledSection(Timeline, 0.25);
const StyledProjects = StyledSection(Projects, 0.5);
const StyledBackTop = styled(BackTop)`
  .ant-back-top-content {
    background-color: rgba(255, 255, 255, 0.25);
  }
`;

const App = () => (
  <Wrapper className="ibm">
    <Header />
    <StyledSocials />
    <StyledTimeline />
    <StyledProjects />
    <StyledBackTop />
  </Wrapper>
);

export default App;
