import { BugOutlined, IdcardOutlined, LoadingOutlined } from '@ant-design/icons';
import { Divider, Tag, Timeline } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import React, { ReactNode } from 'react';
import { Colors, styled } from 'utils';

dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);

interface Experience {
  name: string;
  date: {
    from: string;
    to?: string;
  };
  ongoing?: boolean;
  icon?: ReactNode;
  description?: string;
  tags: { [key in Colors]?: string[] };
}

const format = 'YYYY.MM';
const duration = (from: string, to: string) => dayjs(from, format).from(dayjs(to, format));
const ago = (to: string, suffix = true) => dayjs(to, format).fromNow(!suffix);

const StyledTimelineItem = styled(Timeline.Item)`
  .ant-timeline-item-tail {
    top: 30px;
    height: calc(100% - 50px);
  }

  .ant-timeline-item-content {
    margin-left: 30px;
  }
`;

const IconWrapper = styled.span`
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
    name: 'JetBrains',
    date: { from: '2020.01' },
    ongoing: true,
    description: 'Developer Advocate',
    tags: {
      [Colors.blue]: ['🥑'],
      [Colors.green]: ['java', 'kotlin', 'terraform'],
      [Colors.orange]: ['git', 'teamcity', 'aws'],
    },
  },
  {
    name: 'HSZ',
    date: { from: '2013.02' },
    description: 'Owner, freelancer, JetBrains plugins development.',
    ongoing: true,
    tags: {
      [Colors.blue]: ['owner', 'developer'],
      [Colors.red]: ['web', 'raspberry pi', 'security', 'api'],
      [Colors.green]: ['nodejs', 'react', 'sql', 'java', 'kotlin', 'symfony2'],
      [Colors.orange]: ['git', 'travis', 'aws'],
    },
  },
  {
    name: 'Meelogic',
    date: { from: '2014.07', to: '2020.01' },
    description: 'Web and Android development. Technical leader, architect and recruiter.',
    tags: {
      [Colors.blue]: ['pm', 'tech lead', 'developer'],
      [Colors.red]: ['web', 'mobile', 'security', 'api'],
      [Colors.green]: ['nodejs', 'react', 'typescript', 'php', 'sql', 'java', 'android'],
      [Colors.orange]: ['aws', 'jira', 'git', 'jenkins'],
    },
  },
  {
    name: 'Freedomes',
    date: { from: '2012.11', to: '2014.06' },
    description:
      'PM, Technical leader. Websites and internal applications development for managing the company.',
    tags: {
      [Colors.blue]: ['pm', 'tech lead', 'developer'],
      [Colors.red]: ['web'],
      [Colors.green]: ['php', 'symfony2', 'sass'],
      [Colors.orange]: ['git', 'wordpress'],
    },
  },
  {
    name: 'SB Betting Software',
    date: { from: '2012.07', to: '2012.10' },
    description: 'Planning and development of Android applications with WebServices in Java.',
    tags: {
      [Colors.blue]: ['developer'],
      [Colors.red]: ['mobile', 'api'],
      [Colors.green]: ['java', 'j2ee'],
      [Colors.orange]: ['git'],
    },
  },
  {
    name: 'BL Stream',
    date: { from: '2010.10', to: '2012.07' },
    description:
      'Implementation of projects based on the Android platform and J2EE in Java and jQuery, CSS.',
    tags: {
      [Colors.blue]: ['developer'],
      [Colors.red]: ['web', 'mobile'],
      [Colors.green]: ['java', 'j2ee', 'android'],
      [Colors.orange]: ['git', 'svn'],
    },
  },
  {
    name: 'Magnetic Point',
    date: { from: '2008.07', to: '2010.10' },
    description: 'CMS system development for websites based on Zend Framework in PHP.',
    tags: {
      [Colors.blue]: ['developer'],
      [Colors.red]: ['web'],
      [Colors.green]: ['php', 'zend framework', 'jquery'],
      [Colors.orange]: ['svn'],
    },
  },
  {
    name: 'and many others...',
    date: { from: '2006.10', to: '2008.07' },
    icon: <BugOutlined />,
    tags: {},
  },
];

const Experiences = () => (
  <>
    <Divider dashed>Timeline</Divider>
    <Timeline>
      {data.map(({ name, description, ongoing, icon, tags, date: { from, to } }) => (
        <StyledTimelineItem
          key={name}
          dot={
            <IconWrapper>
              {icon || (ongoing ? <LoadingOutlined /> : <IdcardOutlined />)}
            </IconWrapper>
          }
          color="#ffffff"
        >
          <Title>{name}</Title>
          <Date>
            {to ? `for ${duration(from, to)}, ${ago(from)}` : `since ${ago(from, false)}`}
          </Date>
          {description && <Description>{description}</Description>}
          {(Object.keys(tags) as Colors[]).map((color) => (
            <Tags key={color}>
              {(tags[color] || []).map((tag) => (
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
