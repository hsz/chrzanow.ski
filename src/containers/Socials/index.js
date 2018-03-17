import React, { Component } from 'react';
import { List, Tooltip } from 'antd';
import { media } from 'utils';
import glamorous from 'glamorous';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const data = [
  {
    name: 'GitHub',
    alias: '@hsz',
    description: 'OpenSource projects - private and contributed',
    url: 'https://github.com/hsz',
    icon: ['fab', 'github'],
  },
  {
    name: 'StackOverflow',
    alias: 'hsz',
    description: '~100k reputation with 500+ badges',
    url: 'https://stackoverflow.com/users/223386/hsz',
    icon: ['fab', 'stack-overflow'],
  },
  {
    name: 'LinkedIn',
    alias: 'chrzanowski',
    description: 'Business oriented social network!',
    url: 'https://www.linkedin.com/in/chrzanowski/',
    icon: ['fab', 'linkedin'],
  },
  {
    name: 'Twitter',
    alias: '@hszanowski',
    description: 'Follow me!',
    url: 'https://twitter.com/hszanowski',
    icon: ['fab', 'twitter'],
  },
  {
    name: 'E-mail',
    alias: 'jakub@hsz.mobi',
    description: 'Feel free to mail me',
    url: 'mailto:jakub@hsz.mobi',
    icon: ['fas', 'envelope'],
  },
];

const StyledList = glamorous(List)({
  width: '100%',

  '& .ant-list-item-content': {
    alignItems: 'center',
  },

  '& .ant-spin-container': {
    justifyContent: 'center',
  },

  [media.sm]: {
    '& .ant-spin-container': {
      display: 'flex',
    },
    '& .ant-list-item': {
      borderBottom: 'none !important',
    },
  },
});

const Icon = glamorous(FontAwesomeIcon)({
  fontSize: '2rem',
  cursor: 'pointer',

  [media.sm]: {
    fontSize: '3rem',
    margin: '1rem 2rem',
  },
});


const Content = glamorous(({ className, name, alias, description }) => (
  <div className={className}>
    <strong>{name}</strong>
    <small>{alias}</small>
    <p>{description}</p>
  </div>
))(({ mobileOnly }) => ({
  cursor: 'pointer',
  padding: '0 1rem',

  '& > small': {
    padding: '0 .5rem',
    opacity: .5,
  },

  '& > p': {
    margin: 0,
  },

  [media.sm]: mobileOnly ? {
    display: 'none',
  } : {},
}));

const Socials = ({ className }) => (
  <StyledList
    className={className}
    dataSource={data}
    itemLayout="horizontal"
    renderItem={item => (
      <List.Item key={item.name} onClick={() => {
        window.location = item.url;
      }}>
        <Tooltip placement="bottom" title={<Content {...item} />}>
          <Icon icon={item.icon} />
        </Tooltip>
        <Content mobileOnly {...item} />
      </List.Item>
    )}
  />
);

export default Socials;
