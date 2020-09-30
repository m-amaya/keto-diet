import styled from '@emotion/styled';
import React, { FC } from 'react';

export const OrDivider: FC = () => {
  return <Divider>or</Divider>;
};

const Divider = styled.div({
  color: '#3B454E',
  fontSize: 14,
  position: 'relative',
  textAlign: 'center',
  '::before': {
    backgroundColor: '#E6ECF1',
    content: '" "',
    display: 'block',
    height: 1,
    left: 0,
    position: 'absolute',
    top: '50%',
    width: 'calc(50% - 16px)',
  },
  '::after': {
    backgroundColor: '#E6ECF1',
    content: '" "',
    display: 'block',
    height: 1,
    position: 'absolute',
    right: 0,
    top: '50%',
    width: 'calc(50% - 16px)',
  },
});
