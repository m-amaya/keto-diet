import styled from '@emotion/styled';
import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Sidebar } from 'app/components/sidebar/Sidebar';
import { MealsPage } from 'app/pages/MealsPage';
import { ShoppingPage } from 'app/pages/ShoppingPage';
import { RecipesPage } from 'app/pages/RecipesPage';
import { ProfilePage } from 'app/pages/ProfilePage';
import * as ROUTES from 'store/routes';

export const PageLayout: FC = () => {
  return (
    <Container>
      <Sidebar />
      <PageContent>
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
            <Redirect to={ROUTES.MEALS} />
          </Route>
        </Switch>
      </PageContent>
    </Container>
  );
};

const Container = styled.div({
  backgroundColor: 'pink',
  display: 'flex',
  height: '100vh',
  overflow: 'hidden',
  width: '100%',
});

const PageContent = styled.div({
  backgroundColor: '#fff',
  flexGrow: 5,
  overflowY: 'auto',
});
