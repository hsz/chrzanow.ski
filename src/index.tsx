import { Global } from '@emotion/core';
import '@ibm/type/css/ibm-type.min.css';
import App from 'containers/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { css } from 'utils';
import * as serviceWorker from './serviceWorker';

const globalStyles = css`
  body,
  html {
    height: 100%;
  }
`;

ReactDOM.render(
  <>
    <Global styles={globalStyles} />
    <App />
  </>,
  document.getElementById('root'),
);

serviceWorker.unregister();
