import { hot } from 'react-hot-loader/root';
import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { MealsPage } from 'app/pages/MealsPage';
import { PasswordResetPage } from 'app/pages/PasswordResetPage';
import { ProfilePage } from 'app/pages/ProfilePage';
import { RecipesPage } from 'app/pages/RecipesPage';
import { ShoppingPage } from 'app/pages/ShoppingPage';
import { SigninPage } from 'app/pages/SigninPage';
import { SignupPage } from 'app/pages/SignupPage';
import * as ROUTES from 'store/routes';
import { useUser } from 'utils/hooks/useUser';

export const App: FC = hot(() => {
  const user = useUser();

  console.log({ user });

  return user ? (
    <Switch>
      <Route path={ROUTES.MEALS}>
        <MealsPage />
      </Route>
      <Route path={ROUTES.SHOPPING}>
        <ShoppingPage />
      </Route>
      <Route path={ROUTES.RECIPES}>
        <RecipesPage />
      </Route>
      <Route path={ROUTES.PROFILE}>
        <ProfilePage />
      </Route>
      <Route path="*">
        <Redirect to={ROUTES.PROFILE} />
      </Route>
    </Switch>
  ) : (
    <Switch>
      <Route path={ROUTES.SIGNIN}>
        <SigninPage />
      </Route>
      <Route path={ROUTES.SIGNUP}>
        <SignupPage />
      </Route>
      <Route path={ROUTES.PASSWORD_RESET}>
        <PasswordResetPage />
      </Route>
      <Route path="*">
        <Redirect to={ROUTES.SIGNIN} />
      </Route>
    </Switch>
  );
});
