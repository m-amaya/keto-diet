import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { MealsMobile } from 'app/pages/mobile/MealsMobile';
import { ShoppingMobile } from 'app/pages/mobile/ShoppingMobile';
import { RecipesMobile } from 'app/pages/mobile/RecipesMobile';
import { ProfileMobile } from 'app/pages/mobile/ProfileMobile';
import * as ROUTES from 'store/routes';

export const MobileLayout: FC = () => {
  return (
    <div>
      Mobile Layout
      <Switch>
        <Route path={ROUTES.MEALS}>
          <MealsMobile />
        </Route>
        <Route path={ROUTES.SHOPPING}>
          <ShoppingMobile />
        </Route>
        <Route path={ROUTES.RECIPES}>
          <RecipesMobile />
        </Route>
        <Route path={ROUTES.PROFILE}>
          <ProfileMobile />
        </Route>
        <Route path="*">
          <Redirect to={ROUTES.PROFILE} />
        </Route>
      </Switch>
    </div>
  );
};
