import React from 'react';
import { Divider, List, Icon, Tag } from 'antd';
import styled from 'styled-components';

const data = [
  {
    name: '.ignore IntelliJ Plugin',
    description: '.ignore plugin for JetBrains IDEs (IntelliJ, PhpStorm, PyCharm, ...) that supports dot-ignore files (.gitignore, .npmignore, ...). Plugin has Over 7M downloads (2nd place in Top Downloads).',
    url: 'https://github.com/hsz/idea-gitignore',
    stars: '600+',
    tags: ['intellij', 'java'],
  },
  {
    name: 'webpack-nodesecurity-plugin',
    description: 'NodeJS package that allows to run Node Security check on your package.json file using Webpack.',
    url: 'https://github.com/hsz/idea-nodesecurity',
    stars: '20+',
    tags: ['nodejs', 'webpack', 'security'],
  },
  {
    name: 'NodeSecurity IntelliJ Plugin',
    description: 'IntelliJ Node Security plugin that indicates which Node packages in your project are vulnerable.',
    url: 'https://github.com/hsz/idea-nodesecurity',
    stars: '20+',
    tags: ['intellij', 'kotlin', 'security'],
  },
  {
    name: 'LaTeX IntelliJ Plugin',
    description: 'LaTeX plugin for IntelliJ IDEA.',
    url: 'https://github.com/hsz/idea-nodesecurity',
    stars: '100+',
    tags: ['intellij', 'java'],
  },
  {
    name: 'Timber',
    description: 'Contribution in Timber project, which involves Twig template system into WordPress.',
    url: 'https://github.com/timber/timber',
    stars: '3k+',
    tags: ['php', 'wordpress'],
  }
];

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const StyledTag = styled(Tag)`
  background-color: transparent;
  opacity: .5;
`;

const Projects = ({ className }) => (
  <div className={className}>
    <Divider dashed>Projects</Divider>
    <List
      itemLayout="vertical"
      size="large"
      dataSource={data}
      renderItem={({ name, description, url, stars, tags }) => (
        <List.Item
          key={name}
          actions={[
            <IconText type="star-o" text={stars} />,
            <div>
              {tags.map(tag => (
                <StyledTag color="green" key={tag}>{tag}</StyledTag>
              ))}
            </div>,
          ]}
        >
          <List.Item.Meta
            title={<a href={url}>{name}</a>}
            description={description}
          />
        </List.Item>
      )}
    />
  </div>
);

export default Projects;
