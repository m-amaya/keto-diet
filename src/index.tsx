import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from 'app/App';
import { GlobalStyles } from 'app/components/styles/GlobalStyles';
import { FirebaseStore, FirebaseCtx } from 'store/firebase';

const firebaseStore = new FirebaseStore();

const Providers: FC = ({ children }) => (
  <Router>
    <FirebaseCtx.Provider value={firebaseStore}>
      {children}
    </FirebaseCtx.Provider>
  </Router>
);

ReactDOM.render(
  <>
    <GlobalStyles />
    <Providers>
      <App />
    </Providers>
  </>,
  document.getElementById('keto-app'),
);
