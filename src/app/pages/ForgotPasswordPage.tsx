import styled from '@emotion/styled';
import React, {
  ChangeEventHandler,
  FC,
  ReactEventHandler,
  useContext,
  useState,
} from 'react';

import { AuthForm } from 'app/components/forms/AuthForm';
import { Button } from 'app/components/forms/Button';
import { Input } from 'app/components/forms/Input';
import { SubtleLink } from 'app/components/Link';
import { FirebaseCtx } from 'store/firebase';
import * as ROUTES from 'store/routes';

export const ForgotPasswordPage: FC = () => {
  const { auth } = useContext(FirebaseCtx);
  const [email, setEmail] = useState('');
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState<Message<any> | null>(null);

  const onEmailChange: ChangeEventHandler<HTMLInputElement> = ({
    currentTarget: { value },
  }) => setEmail(value);

  const onSubmit: ReactEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => {
          setEmailHasBeenSent(false);
        }, 3000);
      })
      .catch((err) => {
        const message: Message<null> = {
          type: 'RESET_PASSWORD',
          success: false,
          error: err.message,
          displayError: 'There was an error resetting your password.',
        };

        console.error(message, err);
        setError(message);
      });
  };

  return (
    <AuthForm footer={<Footer />}>
      <Copy>
        Don't worry, happens to the best of us! Enter your email and we'll send
        you a reset link.
      </Copy>
      <Input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={onEmailChange}
      />
      <Button disabled={!email} onClick={onSubmit}>
        Send
      </Button>
    </AuthForm>
  );
};

const Copy = styled.div({
  color: '#3B454E',
  fontSize: 16,
  lineHeight: '22px',
});

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <ArrowIcon className="fas fa-arrow-left"></ArrowIcon>
      <SubtleLink to={ROUTES.SIGNIN}>Back</SubtleLink>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div({
  alignItems: 'center',
  display: 'flex',
});

const ArrowIcon = styled.i({
  color: '#9DAAB6',
  fontSize: 12,
  marginRight: 4,
});
