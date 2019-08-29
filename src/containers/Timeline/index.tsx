import { Divider, Icon, Tag, Timeline } from 'antd';
import moment from 'moment';
import React, { ReactNode } from 'react';
import { Colors, styled } from 'utils';

type DatePair = [number, number];

interface Experience {
  name: string;
  date: {
    from: DatePair;
    to?: DatePair;
  };
  description: string;
  icon: ReactNode;
  tags: { [key in Colors]?: string[] };
}

const duration = (from: DatePair, to: DatePair) => moment(from).from(moment(to), true);
const ago = (to: DatePair, suffix = true) => moment(to).fromNow(!suffix);

const StyledTimelineItem = styled(Timeline.Item)`
  .ant-timeline-item-tail {
    top: 30px;
    height: calc(100% - 50px);
  }

  .ant-timeline-item-content {
    margin-left: 30px;
  }
`;

const StyledIcon = styled(Icon)`
  font-size: 1.5rem;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 1rem;
`;

const Date = styled.span`
  font-size: 0.9rem;
  padding-left: 0.5rem;
  opacity: 0.5;
`;

const Description = styled.div`
  font-style: italic;
  font-size: 0.9rem;
  padding: 0.5rem 0;
`;

const Tags = styled.div`
  .ant-tag {
    margin: 0.2rem;
  }
`;

const data: Experience[] = [
  {
    name: 'Meelogic',
    date: { from: [2014, 7] },
    description: 'Web and Android development. Technical leader, architect and recruiter.',
    icon: <StyledIcon type="loading" spin />,
    tags: {
      [Colors.blue]: ['pm', 'tech lead', 'developer'],
      [Colors.yellow]: ['web', 'mobile', 'security', 'api'],
      [Colors.green]: ['nodejs', 'react', 'typescript', 'php', 'sql', 'java', 'android'],
      [Colors.orange]: ['aws', 'jira', 'git', 'jenkins'],
    },
  },
  {
    name: 'HSZ',
    date: { from: [2013, 2] },
    description: 'Owner, freelancer, JetBrains plugins development.',
    icon: <StyledIcon type="loading" spin />,
    tags: {
      [Colors.blue]: ['owner', 'developer'],
      [Colors.yellow]: ['web', 'raspberry pi', 'security', 'aws', 'api'],
      [Colors.green]: ['nodejs', 'react', 'sql', 'java', 'kotlin', 'symfony2'],
      [Colors.orange]: ['git', 'travis', 'aws'],
    },
  },
  {
    name: 'Freedomes',
    date: { from: [2012, 11], to: [2014, 6] },
    description:
      'PM, Technical leader. Websites and internal applications development for managing the company.',
    icon: <StyledIcon type="idcard" />,
    tags: {
      [Colors.blue]: ['pm', 'tech lead', 'developer'],
      [Colors.yellow]: ['web'],
      [Colors.green]: ['php', 'symfony2', 'sass'],
      [Colors.orange]: ['git', 'wordpress'],
    },
  },
  {
    name: 'SB Betting Software',
    date: { from: [2012, 7], to: [2012, 10] },
    description: 'Planning and development of Android applications with WebServices in Java.',
    icon: <StyledIcon type="idcard" />,
    tags: {
      [Colors.blue]: ['developer'],
      [Colors.yellow]: ['mobile', 'api'],
      [Colors.green]: ['java', 'j2ee'],
      [Colors.orange]: ['git'],
    },
  },
  {
    name: 'BL Stream',
    date: { from: [2010, 10], to: [2012, 7] },
    description:
      'Implementation of projects based on the Android platform and J2EE in Java and jQuery, CSS.',
    icon: <StyledIcon type="idcard" />,
    tags: {
      [Colors.blue]: ['developer'],
      [Colors.yellow]: ['web', 'mobile'],
      [Colors.green]: ['java', 'j2ee', 'android'],
      [Colors.orange]: ['git', 'svn'],
    },
  },
  {
    name: 'Magnetic Point',
    date: { from: [2008, 7], to: [2010, 10] },
    description: 'CMS system development for websites based on Zend Framework in PHP.',
    icon: <StyledIcon type="idcard" />,
    tags: {
      [Colors.blue]: ['developer'],
      [Colors.yellow]: ['web'],
      [Colors.green]: ['php', 'zend framework', 'jquery'],
      [Colors.orange]: ['svn'],
    },
  },
  {
    name: 'and many others...',
    date: { from: [2006, 10], to: [2008, 7] },
    description: '',
    icon: <StyledIcon type="bug" />,
    tags: {},
  },
];

const Experiences = () => (
  <>
    <Divider dashed>Timeline</Divider>
    <Timeline>
      {data.map(({ name, description, icon, tags, date: { from, to } }) => (
        <StyledTimelineItem key={name} dot={icon} color="#ffffff">
          <Title>{name}</Title>
          <Date>
            {to ? `for ${duration(from, to)}, ${ago(from)}` : `since ${ago(from, false)}`}
          </Date>
          <Description>{description}</Description>
          {(Object.keys(tags) as Colors[]).map(color => (
            <Tags key={color}>
              {(tags[color] || []).map(tag => (
                <Tag color={color} key={tag}>
                  {tag}
                </Tag>
              ))}
            </Tags>
          ))}
        </StyledTimelineItem>
      ))}
    </Timeline>
  </>
);

export default Experiences;
