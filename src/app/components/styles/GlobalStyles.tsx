import { Global } from '@emotion/core';
import React, { FC } from 'react';
import { textFont, textFontSize } from './typography';

export const GlobalStyles: FC = () => (
  <Global
    styles={{
      body: {
        backgroundColor: '#f5f7f9',
        color: '#3B454E',
        fontFamily: textFont,
        fontWeight: textFontSize.regular,
      },
      '*': {
        boxSizing: 'border-box',
      },
    }}
  />
);
