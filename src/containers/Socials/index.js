import React, { Component } from 'react';
import { Avatar, List } from 'antd';
import styled from 'styled-components';
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
    description: 'Over 91k reputation with 480+ badges',
    url: 'https://stackoverflow.com/users/223386/hsz',
    icon: ['fab', 'stack-overflow'],
  },
  {
    name: 'LinkedIn',
    alias: 'chrzanowski',
    description: 'Currently at Meelogic',
    url: 'https://linkedin.com/in/chrzanowski',
    icon: ['fab', 'linkedin'],
  },
  {
    name: 'Twitter',
    alias: '@hszanowski',
    description: 'You can follow, I\'m not flooding',
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

const StyledInfo = styled(({ className, name, alias }) => (
  <div className={className}>
    {name}
    <small>{alias}</small>
  </div>
))`
  small {
    padding-left: .5rem;
    opacity: .5;
  }
`;

class Socials extends Component {
  onItemClick = (url) => {
    window.location = url;
  };

  render() {
    const { className } = this.props;

    return (
      <List
        className={className}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={({ icon, name, alias, description, url }) => (
          <List.Item onClick={() => this.onItemClick(url)}>
            <List.Item.Meta
              avatar={
                <Avatar style={{ backgroundColor: 'transparent' }}>
                  <FontAwesomeIcon icon={icon} size="lg" />
                </Avatar>
              }
              title={<StyledInfo name={name} alias={alias} />}
              description={description}
            />
          </List.Item>
        )}
      />
    );
  }
}

export default Socials;
