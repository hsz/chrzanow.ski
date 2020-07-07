import { Global } from '@emotion/core';
import App from 'containers/App';
import React from 'react';
import { hydrate, render } from 'react-dom';
import { css } from 'utils';
import * as serviceWorker from './serviceWorker';

const globalStyles = css`
  body,
  html {
    height: 100%;
    font-family: 'IBM Plex Sans', sans-serif;
    letter-spacing: 1px;
  }
`;

const rootElement = document.getElementById('root');
(rootElement?.hasChildNodes() ? hydrate : render)(
  <>
    <Global styles={globalStyles} />
    <App />
  </>,
  rootElement,
);

serviceWorker.unregister();
