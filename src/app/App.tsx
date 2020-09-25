import { hot } from 'react-hot-loader/root';
import React, { FC } from 'react';

import { breakpoints } from 'app/components/styles/utils';
import { MobileAuthLayout } from 'app/components/layouts/MobileAuthLayout';
import { MobileLayout } from 'app/components/layouts/MobileLayout';
import { PageAuthLayout } from 'app/components/layouts/PageAuthLayout';
import { PageLayout } from 'app/components/layouts/PageLayout';
import { useUser } from 'utils/hooks/useUser';
import { useWindowSize } from 'utils/hooks/useWindowSize';

export const App: FC = hot(() => {
  const [loadingState, user] = useUser();
  const [windowWidth] = useWindowSize();

  const isMobile = windowWidth > 0 && windowWidth <= breakpoints.md;

  return loadingState === 'loading' ? (
    <div>Loading...</div>
  ) : isMobile ? (
    user ? (
      <MobileLayout />
    ) : (
      <MobileAuthLayout />
    )
  ) : user ? (
    <PageLayout />
  ) : (
    <PageAuthLayout />
  );
});
