import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'containers';
import { injectGlobal } from 'styled-components';
import 'normalize.css';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  body, html, #root {
    height: 100%;
  }
`;

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
registerServiceWorker();
