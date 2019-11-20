import { Icon, List } from 'antd';
import { StackOverflow } from 'components';
import React, { ReactNode } from 'react';
import { styled } from 'utils';

interface Social {
  name: string;
  alias: string;
  description: string;
  url: string;
  icon: ReactNode;
}

const StyledListItem = styled(List.Item)`
  cursor: pointer;
  padding: 0;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const StyledIcon = styled(Icon)`
  font-size: 2rem;
  padding-right: 1rem;
`;

const Content = styled.a`
  cursor: pointer;
  color: inherit;
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  &:hover {
    color: inherit;
  }

  small {
    padding: 0 0.5rem;
    opacity: 0.5;
  }

  p {
    margin: 0;
  }
`;

const data: Social[] = [
  {
    name: 'GitHub',
    alias: '@hsz',
    description: 'OpenSource projects - private and contributed',
    url: 'https://github.com/hsz',
    icon: <StyledIcon type="github" />,
  },
  {
    name: 'StackOverflow',
    alias: 'hsz',
    description: '125k+ reputation with 500+ badges',
    url: 'https://stackoverflow.com/users/223386/hsz',
    icon: <StyledIcon component={StackOverflow} />,
  },
  {
    name: 'LinkedIn',
    alias: 'chrzanowski',
    description: 'Business oriented social network',
    url: 'https://www.linkedin.com/in/chrzanowski/',
    icon: <StyledIcon type="linkedin" />,
  },
  {
    name: 'Twitter',
    alias: '@hszanowski',
    description: 'Follow me!',
    url: 'https://twitter.com/hszanowski',
    icon: <StyledIcon type="twitter" />,
  },
  {
    name: 'E-mail',
    alias: 'jakub@hsz.mobi',
    description: 'Feel free to mail me',
    url: 'mailto:jakub@hsz.mobi',
    icon: <StyledIcon type="mail" />,
  },
];

const Socials = () => (
  <List
    dataSource={data}
    itemLayout="horizontal"
    renderItem={item => (
      <StyledListItem key={item.name}>
        <Content href={item.url}>
          {item.icon}
          <div>
            <strong>{item.name}</strong>
            <small>{item.alias}</small>
            <p>{item.description}</p>
          </div>
        </Content>
      </StyledListItem>
    )}
  />
);

export default Socials;
