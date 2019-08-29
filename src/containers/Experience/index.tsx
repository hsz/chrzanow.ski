import React, { useState, useEffect } from 'react';
import { Divider, Progress, Row, Col } from 'antd';

const keywords = [
  'javascript',
  'java',
  'c#',
  'php',
  'python',
  'android',
  'jquery',
  'html',
  'c++',
  'ios',
  'css',
  'mysql',
  'sql',
  'asp.net',
  'ruby-on-rails',
  'c',
  'r',
  'arrays',
  'node.js',
  'objective-c',
  '.net',
  'json',
  'sql-server',
  'angularjs',
  'swift',
  'iphone',
  'regex',
  'ruby',
  'django',
  'excel',
  'ajax',
  'xml',
  'asp.net-mvc',
  'angular',
  'python-3.x',
  'linux',
  'database',
  'spring',
  'reactjs',
  'wordpress',
  'wpf',
  'vba',
  'string',
  'xcode',
  'windows',
  'vb.net',
  'laravel',
  'html5',
  'mongodb',
  'eclipse',
  'multithreading',
  'pandas',
  'bash',
  'git',
  'oracle',
  'postgresql',
  'forms',
  'twitter-bootstrap',
  'image',
  'macos',
  'algorithm',
  'python-2.7',
  'scala',
  'list',
  'typescript',
  'visual-studio',
  'winforms',
  'apache',
  'matlab',
  'performance',
  'facebook',
  'excel-vba',
  'entity-framework',
  'amazon-web-services',
  'css3',
  'hibernate',
  'sqlite',
  'function',
  'firebase',
  'linq',
  'azure',
  'swing',
  'rest',
  'shell',
  'qt',
  'powershell',
  'api',
  'maven',
  '.htaccess',
  'file',
  'selenium',
  'unit-testing',
  'loops',
  'spring-boot',
  'codeigniter',
  'numpy',
  'csv',
  'perl',
  'symfony',
  'docker',
  'google-maps',
  'class',
  'uitableview',
  'cordova',
  'web-services',
  'google-chrome',
  'tsql',
  'sorting',
]; // https://stackoverflow.com/tags?tab=popular ;-)

const rand = (n: number) => Math.floor(Math.random() * n);

const Experience = () => {
  const [percent, setPercent] = useState(1);
  const [keyword, setKeyword] = useState(keywords[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent(rand(100));
      setKeyword(keywords[rand(keywords.length)]);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Divider>Experience</Divider>
      <Row type="flex">
        <Col span={4}>{keyword}</Col>
        <Col span={20}>
          <Progress
            percent={percent}
            strokeColor={{
              '0%': '#3bb4cc',
              '100%': '#1b5f6b',
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default Experience;
