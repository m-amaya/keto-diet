import styled from '@emotion/styled';
import React, { FC, ButtonHTMLAttributes } from 'react';

import { textFont, textFontWeight } from 'app/components/styles/typography';
import { saturate, grayscale } from 'app/components/styles/utils';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <Element {...props} />;
};

const getBackgroundColor = (className: string, disabled: boolean) => {
  let backgroundColor = '#F06292';

  if (className === 'google') {
    backgroundColor = '#1477F8';
  }

  if (disabled) {
    backgroundColor = grayscale('#F06292');
  }

  return backgroundColor;
};

const Element = styled.button(({ className = '', disabled = false }) => ({
  backgroundColor: getBackgroundColor(className, disabled),
  border: 0,
  borderRadius: 4,
  color: '#fff',
  cursor: disabled ? 'not-allowed' : 'pointer',
  fontFamily: textFont,
  fontWeight: textFontWeight.bold,
  height: 40,
  transition: 'background 200ms',
  width: '100%',
  ':focus': {
    backgroundColor: saturate(getBackgroundColor(className, disabled), 0.5),
    outline: 0,
  },
  ':hover': {
    backgroundColor: saturate(getBackgroundColor(className, disabled), 0.5),
  },
}));
