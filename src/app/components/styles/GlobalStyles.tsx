import { Global } from '@emotion/core';
import React, { FC } from 'react';

export const GlobalStyles: FC = () => (
  <Global
    styles={{
      body: {
        backgroundColor: 'pink',
      },
    }}
  />
);
