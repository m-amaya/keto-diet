import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { SigninPage } from 'app/pages/SigninPage';
import { SignupPage } from 'app/pages/SignupPage';
import { ForgotPasswordPage } from 'app/pages/ForgotPasswordPage';
import * as ROUTES from 'store/routes';

export const PageAuthLayout: FC = () => {
  return (
    <div>
      Page Auth Layout
      <Switch>
        <Route path={ROUTES.SIGNIN}>
          <SigninPage />
        </Route>
        <Route path={ROUTES.SIGNUP}>
          <SignupPage />
        </Route>
        <Route path={ROUTES.FORGOT_PASSWORD}>
          <ForgotPasswordPage />
        </Route>
        <Route path="*">
          <Redirect to={ROUTES.SIGNIN} />
        </Route>
      </Switch>
    </div>
  );
};
