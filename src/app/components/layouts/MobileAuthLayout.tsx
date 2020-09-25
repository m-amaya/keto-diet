import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { SigninMobile } from 'app/pages/mobile/SigninMobile';
import { SignupMobile } from 'app/pages/mobile/SignupMobile';
import { ForgotPasswordMobile } from 'app/pages/mobile/ForgotPasswordMobile';
import * as ROUTES from 'store/routes';

export const MobileAuthLayout: FC = () => {
  return (
    <div>
      Mobile Auth Layout
      <Switch>
        <Route path={ROUTES.SIGNIN}>
          <SigninMobile />
        </Route>
        <Route path={ROUTES.SIGNUP}>
          <SignupMobile />
        </Route>
        <Route path={ROUTES.FORGOT_PASSWORD}>
          <ForgotPasswordMobile />
        </Route>
        <Route path="*">
          <Redirect to={ROUTES.SIGNIN} />
        </Route>
      </Switch>
    </div>
  );
};
