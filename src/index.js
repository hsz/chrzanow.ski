import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'containers';
import { injectGlobal } from 'styled-components';
import registerServiceWorker from './registerServiceWorker';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import solid from '@fortawesome/fontawesome-free-solid';

import 'normalize.css';
import '@ibm/type/css/ibm-type.min.css';

fontawesome.library.add(brands, solid);

injectGlobal`
  body, html {
    height: 100%;
  }
`;

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
registerServiceWorker();
