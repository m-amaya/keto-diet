import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { MealsPage } from 'app/pages/MealsPage';
import { ShoppingPage } from 'app/pages/ShoppingPage';
import { RecipesPage } from 'app/pages/RecipesPage';
import { ProfilePage } from 'app/pages/ProfilePage';
import * as ROUTES from 'store/routes';

export const PageLayout: FC = () => {
  return (
    <div>
      Page Layout
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
    </div>
  );
};
