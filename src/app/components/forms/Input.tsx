import styled from '@emotion/styled';
import React, { FC, InputHTMLAttributes } from 'react';

import { textFont, textFontWeight } from 'app/components/styles/typography';

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <Element {...props} />;
};

const Element = styled.input({
  border: '1px solid #9DAAB6',
  borderRadius: 4,
  color: '#3B454E',
  fontFamily: textFont,
  fontSize: 16,
  fontWeight: textFontWeight.regular,
  height: 40,
  padding: '0 16px',
  width: '100%',
  ':focus': {
    outlineColor: '#F06292',
  },
  '::placeholder': {
    color: '#9DAAB6',
  },
});
