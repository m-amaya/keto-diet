import styled from '@emotion/styled';
import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { rgba } from 'app/components/styles/utils';
import { SigninMobile } from 'app/pages/mobile/SigninMobile';
import { SignupMobile } from 'app/pages/mobile/SignupMobile';
import { ForgotPasswordMobile } from 'app/pages/mobile/ForgotPasswordMobile';
import * as ROUTES from 'store/routes';

export const MobileAuthLayout: FC = () => {
  return (
    <Container>
      <Overlay>
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
  backgroundColor: rgba('#FFFFFF', 0.65),
  height: '100%',
  overflowY: 'auto',
  padding: '80px 0',
  width: '100%',
});
