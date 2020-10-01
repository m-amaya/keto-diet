import styled from '@emotion/styled';
import React, { FC } from 'react';

import { Logo } from 'app/components/Logo';
import * as ROUTES from 'store/routes';
import { Tab } from './Tab';

const TABS = [
  {
    iconClass: 'far fa-calendar-alt',
    label: 'Meals',
    linkTo: ROUTES.MEALS,
  },
  {
    iconClass: 'fas fa-shopping-basket',
    label: 'Shopping',
    linkTo: ROUTES.SHOPPING,
  },
  {
    iconClass: 'far fa-clipboard',
    label: 'Recipes',
    linkTo: ROUTES.RECIPES,
  },
  {
    iconClass: 'far fa-user-circle',
    label: 'Profile',
    linkTo: ROUTES.PROFILE,
  },
];

export const Sidebar: FC = () => {
  return (
    <Container>
      <Content>
        <Logo />
        <TabNav>
          <TabList>
            {TABS.map((props) => (
              <Tab {...props} />
            ))}
          </TabList>
        </TabNav>
      </Content>
    </Container>
  );
};

const Container = styled.div({
  backgroundColor: '#F5F7F9',
  borderRight: '1px solid #E6ECF1',
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'flex-end',
  padding: '32px 0 32px 16px',
});

const Content = styled.div({
  maxWidth: 260,
  width: '100%',
});

const TabNav = styled.nav({
  marginTop: 32,
});

const TabList = styled.ul({
  listStyleType: 'none',
  margin: 0,
  padding: 0,
});
