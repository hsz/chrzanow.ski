import React, { Component } from 'react';
import { Divider, List, Icon, Button } from 'antd';

const data = [
  {
    name: '.ignore IntelliJ Plugin',
    description: '.ignore plugin for JetBrains IDEs (IntelliJ, PhpStorm, PyCharm, ...) that supports dot-ignore files (.gitignore, .npmignore, ...). Plugin has Over 7M downloads (2nd place in Top Downloads).',
    url: 'https://github.com/hsz/idea-gitignore',
    stars: 643,
  },
  {
    name: 'webpack-nodesecurity-plugin',
    description: 'NodeJS package that allows to run Node Security check on your package.json file using Webpack.',
    url: 'https://github.com/hsz/idea-nodesecurity',
    stars: 24,
  },
  {
    name: 'NodeSecurity IntelliJ Plugin',
    description: 'IntelliJ Node Security plugin that indicates which Node packages in your project are vulnerable.',
    url: 'https://github.com/hsz/idea-nodesecurity',
    stars: 24,
  },
  {
    name: 'LaTeX IntelliJ Plugin',
    description: 'LaTeX plugin for IntelliJ IDEA.',
    url: 'https://github.com/hsz/idea-nodesecurity',
    stars: 122,
  },
  {
    name: 'Timber',
    description: 'Contribution in Timber project, which involves Twig template system into WordPress.',
    url: 'https://github.com/timber/timber',
    stars: 3666,
  }
];

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class Projects extends Component {
  render() {
    return (
      <div>
        <Divider dashed >Projects</Divider>

        <Button type="primary">aaa</Button>

        <List
          itemLayout="vertical"
          size="large"
          dataSource={data}
          renderItem={({ name, description, url, stars }) => (
            <List.Item
              key={name}
              actions={[<IconText type="star-o" text={stars} />]}
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
  }
}

Projects.propTypes = {
};

export default Projects;
