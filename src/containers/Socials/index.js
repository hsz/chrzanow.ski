import React, { Component } from 'react';
import { Row, Col, Tooltip } from 'antd';
import { media } from 'utils';
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

const StyledRow = styled(Row)`
  svg {
    display: block;
    margin: .5rem auto;
    cursor: pointer;
    font-size: 2rem;
    
    &:hover {
      opacity: .3;
    }
    
    ${media.greaterThan('sm')`
      font-size: 3rem;
    `}
  }
`;

const Content = styled(({ className, name, alias, description }) => (
  <div className={className}>
    <strong>{name}</strong>
    <small>{alias}</small>
    <p>{description}</p>
  </div>
))`
  cursor: pointer;

  small {
    padding-left: .5rem;
    opacity: .5;
  }
  
  p {
    margin: 0;
    font-size: .75rem;
    
    ${media.lessThan('sm')`
      margin-bottom: 1rem;
    `}
  }
`;

class Socials extends Component {
  onItemClick = (url) => {
    window.location = url;
  };

  render() {
    const { className } = this.props;

    return (
      <StyledRow className={className} gutter={{ sm: 48 }} justify="end ">
        {data.map((item) => {
          const { icon, url } = item;
          const onClick = () => this.onItemClick(url);

          return [
            <Col xs={6} sm={Math.floor(24 / 5)} onClick={onClick}>
              <Tooltip placement="bottom" title={<Content {...item} />}>
                <FontAwesomeIcon icon={icon} />
              </Tooltip>
            </Col>,
            <Col xs={18} sm={0} onClick={onClick}>
              <Content {...item} />
            </Col>,
          ];
        })}
      </StyledRow>
    );
  }
}

export default Socials;
