import styled from '@emotion/styled';
import React, { FC } from 'react';

import { titleFont } from 'app/components/styles/typography';

export const Logo: FC = () => {
  return (
    <Container>
      <LogoIcon className="fas fa-utensils" />
      <LogoText>Keto Diet</LogoText>
    </Container>
  );
};

const Container = styled.div({
  alignItems: 'center',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
});

const LogoIcon = styled.i({
  color: '#25C6D8',
  fontSize: 32,
});

const LogoText = styled.div({
  color: '#3B454E',
  fontFamily: titleFont,
  fontSize: 24,
  marginLeft: 16,
});
