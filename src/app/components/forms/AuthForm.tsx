import styled from '@emotion/styled';
import React, { FC } from 'react';

import { Logo } from 'app/components/Logo';

export const AuthForm: FC<{ footer: JSX.Element }> = ({ footer, children }) => {
  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <Form>{children}</Form>
      <Footer>
        <FooterContent>{footer}</FooterContent>
      </Footer>
    </Container>
  );
};

const Container = styled.div({
  backgroundColor: '#FFF',
  border: '1px solid #E6ECF1',
  borderRadius: 4,
  boxShadow: '#E6ECF1 0 1px 2px',
  maxWidth: 340,
  width: '100%',
});

const Header = styled.div({
  backgroundColor: '#F5F7F9',
  borderBottom: '1px solid #E6ECF1',
  padding: 16,
});

const Form = styled.form({
  display: 'grid',
  gap: 16,
  gridTemplateRows: 'repeat(1fr, 100%)',
  padding: 32,
});

const Footer = styled.div({
  padding: '0 32px',
});

const FooterContent = styled.div({
  borderTop: '1px solid #E6ECF1',
  padding: '16px 0',
});
