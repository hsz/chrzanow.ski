import React, { Component } from 'react';
import { Avatar, List } from 'antd';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const data = [
  {
    name: 'GitHub',
    description: 'OpenSource projects - private and contributed',
    url: 'https://github.com/hsz',
    icon: ['fab', 'github'],
  },
  {
    name: 'StackOverflow',
    description: 'Over 91k reputation with 480+ badges',
    url: 'https://stackoverflow.com/users/223386/hsz',
    icon: ['fab', 'stack-overflow'],
  },
  {
    name: 'LinkedIn',
    description: 'Currently at Meelogic',
    url: 'https://linkedin.com/in/chrzanowski',
    icon: ['fab', 'linkedin'],
  },
  {
    name: 'Twitter',
    description: 'You can follow, I\'m not flooding',
    url: 'https://twitter.com/hszanowski',
    icon: ['fab', 'twitter'],
  },
  {
    name: 'E-mail',
    description: 'Feel free to mail me',
    url: 'mailto:jakub@hsz.mobi',
    icon: ['fas', 'envelope'],
  },
];

class Socials extends Component {
  onItemClick = (url) => {
    window.location = url;
  };

  render() {
    return (
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={({ icon, name, description, url }) => (
          <List.Item onClick={() => this.onItemClick(url)}>
            <List.Item.Meta
              avatar={
                <Avatar style={{ backgroundColor: 'transparent' }}>
                  <FontAwesomeIcon icon={icon} size="lg" />
                </Avatar>
              }
              title={name}
              description={description}
            />
          </List.Item>
        )}
      />
    );
  }
}

Socials.propTypes = {};

export default Socials;
