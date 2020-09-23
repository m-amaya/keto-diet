import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'app/App';
import { GlobalStyles } from 'app/components/styles/GlobalStyles';

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('keto-app'),
);
