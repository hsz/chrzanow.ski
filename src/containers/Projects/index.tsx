import React from 'react';
import {Divider, List, Tag} from 'antd';
import {Colors} from 'utils';
import StarOutlined from '@ant-design/icons/StarOutlined';

interface Project {
  name: string;
  description: string;
  url: string;
  stars: string;
  tags: string[];
}

const data: Project[] = [
  {
    name: '.ignore IntelliJ Plugin',
    description:
      '.ignore plugin for JetBrains IDEs (IntelliJ, PhpStorm, PyCharm, ...) that supports dot-ignore files (.gitignore, .npmignore, ...). Plugin has Over 7M downloads (2nd place in Top Downloads).',
    url: 'https://github.com/JetBrains/idea-gitignore',
    stars: '1k',
    tags: ['intellij', 'java'],
  },
  {
    name: 'webpack-nodesecurity-plugin',
    description:
      'NodeJS package that allows to run Node Security check on your package.json file using Webpack.',
    url: 'https://github.com/hsz/idea-nodesecurity',
    stars: '20+',
    tags: ['nodejs', 'webpack', 'security'],
  },
  {
    name: 'NodeSecurity IntelliJ Plugin',
    description:
      'IntelliJ Node Security plugin that indicates which Node packages in your project are vulnerable.',
    url: 'https://github.com/hsz/idea-nodesecurity',
    stars: '30+',
    tags: ['intellij', 'kotlin', 'security'],
  },
  {
    name: 'LaTeX IntelliJ Plugin',
    description: 'LaTeX plugin for IntelliJ IDEA.',
    url: 'https://github.com/hsz/idea-latex',
    stars: '130+',
    tags: ['intellij', 'java'],
  },
  {
    name: 'Timber',
    description:
      'Contribution in Timber project, which involves Twig template system into WordPress.',
    url: 'https://github.com/timber/timber',
    stars: '4k+',
    tags: ['php', 'wordpress'],
  },
];

const Projects = () => (
  <>
    <Divider dashed>Projects</Divider>
    <List<Project>
      itemLayout="vertical"
      size="large"
      dataSource={data}
      renderItem={({name, description, url, stars, tags}) => (
        <List.Item
          key={name}
          actions={[
            <span>
              <StarOutlined style={{marginRight: 8}}/>
              {stars}
            </span>,
            <div>
              {tags.map(tag => (
                <Tag key={tag} color={Colors.blue}>
                  {tag}
                </Tag>
              ))}
            </div>,
          ]}
        >
          <List.Item.Meta title={<a href={url}>{name}</a>} description={description}/>
        </List.Item>
      )}
    />
  </>
);

export default Projects;
