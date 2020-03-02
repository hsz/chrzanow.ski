import { StarOutlined } from '@ant-design/icons';
import { Divider, List, Tag } from 'antd';
import React from 'react';
import { Colors } from 'utils';

interface Project {
  name: string;
  description: string;
  url?: string;
  stars: string;
  tags: string[];
}

const data: Project[] = [
  {
    name: '.ignore IntelliJ Plugin',
    description:
      '.ignore plugin for JetBrains IDEs (IntelliJ, PhpStorm, PyCharm, ...) that supports dot-ignore files ' +
      '(.gitignore, .npmignore, ...). Plugin has Over 7M downloads (2nd place in Top Downloads).',
    url: 'https://github.com/JetBrains/idea-gitignore',
    stars: '1k',
    tags: ['intellij', 'java'],
  },
  {
    name: 'RaspberryPi project for managing the GoPro cameras during drive',
    description: 'Complex system for integration with car’s onboard server for triggering the GoPro cameras ' +
      'shutters depending on the odometer or GPS location. Development of NodeJS application for contacting and ' +
      'triggering GoPros shutters over multiple Wi-Fi adapters at the same time on electrical impulse from the ' +
      'onboard computer connected with RS232.',
    url: undefined,
    stars: 'private',
    tags: ['nodejs', 'raspberrypi', 'low-level'],
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
      renderItem={({ name, description, url, stars, tags }) => (
        <List.Item
          key={name}
          actions={[
            <span>
              <StarOutlined style={{ marginRight: 8 }} />
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
          <List.Item.Meta title={url ? <a href={url}>{name}</a> : name} description={description} />
        </List.Item>
      )}
    />
  </>
);

export default Projects;
