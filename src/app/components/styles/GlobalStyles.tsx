import { Global } from '@emotion/core';
import React, { FC } from 'react';
import { fontFamily } from './typography';

export const GlobalStyles: FC = () => (
  <Global
    styles={{
      body: {
        backgroundColor: '#f5f7f9',
        color: '#3b454e',
        fontFamily,
      },
      '*': {
        boxSizing: 'border-box',
      },
    }}
  />
);
