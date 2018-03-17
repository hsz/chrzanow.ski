import React from 'react';
import { Tag, Timeline } from 'antd';
import { Divider } from 'components';
import { flatMap } from 'lodash';
import styled from 'styled-components';
import moment from 'moment';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { colors } from 'utils';

const data = [
  {
    name: 'Meelogic',
    date: [[2014, 7]],
    description: 'Web and Android development. Managing a team of developers and testers, technical leader and recruiter.',
    icon: <FontAwesomeIcon icon="spinner" spin />,
    tags: {
      blue: ['pm', 'tech lead', 'developer'],
      yellow: ['web', 'mobile', 'security', 'api'],
      green: ['nodejs', 'react', 'php', 'sql', 'java', 'android'],
      orange: ['aws', 'jira', 'git', 'jenkins'],
    },
  },
  {
    name: 'HSZ',
    date: [[2013, 2]],
    description: 'Owner, freelancer, JetBrains plugins development.',
    icon: <FontAwesomeIcon icon="spinner" spin />,
    tags: {
      blue: ['owner', 'developer'],
      yellow: ['web', 'raspberry pi', 'security', 'aws', 'api'],
      green: ['nodejs', 'react', 'sql', 'java', 'kotlin', 'symfony2'],
      orange: ['git', 'travis', 'aws'],
    },
  },
  {
    name: 'Freedomes',
    date: [[2012, 11], [2014, 6]],
    description: 'Managing a team of programmers. Planning and realization of websites and internal applications for managing the company.',
    icon: <FontAwesomeIcon icon="briefcase" />,
    tags: {
      blue: ['pm', 'tech lead', 'developer'],
      yellow: ['web'],
      green: ['php', 'symfony2', 'sass'],
      orange: ['git', 'wordpress'],
    },
  },
  {
    name: 'SB Betting Software',
    date: [[2012, 7], [2012, 10]],
    description: 'Planning and development of Android applications with WebServices in Java.',
    icon: <FontAwesomeIcon icon="briefcase" />,
    tags: {
      blue: ['developer'],
      yellow: ['mobile', 'api'],
      green: ['java', 'j2ee'],
      orange: ['git'],
    },
  },
  {
    name: 'BL Stream',
    date: [[2010, 10], [2012, 7]],
    description: 'Implementation of projects based on the Android platform and J2EE in Java and jQuery, CSS.',
    icon: <FontAwesomeIcon icon="briefcase" />,
    tags: {
      blue: ['developer'],
      yellow: ['web', 'mobile'],
      green: ['java', 'j2ee', 'android'],
      orange: ['git', 'svn'],
    },
  },
  {
    name: 'Magnetic Point',
    date: [[2008, 7], [2010, 10]],
    description: 'CMS system development for websites based on Zend Framework in PHP.',
    icon: <FontAwesomeIcon icon="briefcase" />,
    tags: {
      blue: ['developer'],
      yellow: ['web'],
      green: ['php', 'zend framework', 'jquery'],
      orange: ['svn'],
    },
  },
  {
    name: 'and many others...',
    date: [[2006, 10], [2008, 7]],
    icon: <FontAwesomeIcon icon="random" />,
  },
];

const duration = (from, to) => moment(from).from(moment(to), true);
const ago = (to, suffix = true) => moment(to).fromNow(!suffix);

const Title = styled.span`
  font-weight: bold;
`;

const Date = styled.span`
  font-size: .75rem;
  padding-left: .5rem;
  opacity: .5;
`;

const Description = styled.div`
  font-style: italic;
  font-size: .75rem;
  padding: .5rem 0;
`;

const Tags = styled.div`
  .ant-tag {
    margin: .2rem;
  }
`;

const Experiences = ({ className }) => (
  <div className={className}>
    <Divider dashed>Timeline</Divider>
    <Timeline>
      {data.map(({ name, description, icon, tags = [], date: [from, to] = [] }) => (
        <Timeline.Item key={name} dot={icon}>
          <Title>{name}</Title>
          <Date>
            {to ? `for ${duration(from, to)}, ${ago(from)}` : `since ${ago(from, false)}`}
          </Date>
          <Description>{description}</Description>
          {flatMap(tags, ((values, color) => (
            <Tags key={color}>
              {values.map(tag =>
                <Tag color={colors[color]} key={tag}>{tag}</Tag>
              )}
            </Tags>
          )))}
        </Timeline.Item>
      ))}
    </Timeline>
  </div>
);

export default Experiences;
