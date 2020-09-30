import styled from '@emotion/styled';
import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { rgba } from 'app/components/styles/utils';
import { SigninPage } from 'app/pages/SigninPage';
import { SignupPage } from 'app/pages/SignupPage';
import { ForgotPasswordPage } from 'app/pages/ForgotPasswordPage';
import * as ROUTES from 'store/routes';

export const PageAuthLayout: FC = () => {
  return (
    <Container>
      <Overlay>
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
      </Overlay>
    </Container>
  );
};

const Container = styled.div({
  backgroundImage: `url('/assets/img/veg-tile.svg')`,
  backgroundPosition: 'center',
  height: '100vh',
  overflow: 'hidden',
});

const Overlay = styled.div({
  alignItems: 'center',
  backgroundColor: rgba('#FFFFFF', 0.65),
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  overflowY: 'auto',
  width: '100%',
});
