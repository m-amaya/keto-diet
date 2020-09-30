import styled from '@emotion/styled';
import React, {
  FC,
  ChangeEventHandler,
  ReactEventHandler,
  useContext,
  useState,
} from 'react';

import { AuthForm } from 'app/components/forms/AuthForm';
import { Button } from 'app/components/forms/Button';
import { Input } from 'app/components/forms/Input';
import { OrDivider } from 'app/components/forms/OrDivider';
import { DefaultLink, MutedLink } from 'app/components/Link';
import { FirebaseCtx } from 'store/firebase';
import * as ROUTES from 'store/routes';

export const SigninPage: FC = () => {
  const { auth, provider } = useContext(FirebaseCtx);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<Message<any> | null>(null);

  const onEmailChange: ChangeEventHandler<HTMLInputElement> = ({
    currentTarget: { value },
  }) => setEmail(value);

  const onPasswordChange: ChangeEventHandler<HTMLInputElement> = ({
    currentTarget: { value },
  }) => setPassword(value);

  const onEmailSignin: ReactEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password).catch((err) => {
      const message: Message<null> = {
        type: 'EMAIL_SIGNIN',
        success: false,
        error: err.message,
        displayError: 'There was an error signing into your account.',
      };

      console.error(message, err);
      setError(message);
    });
  };

  const onGoogleSignin = () => auth.signInWithPopup(provider);

  return (
    <AuthForm footer={<Footer />}>
      <Button className="google" onClick={onGoogleSignin}>
        Sign In with Google
      </Button>
      <OrDivider />
      <Input
        type="email"
        placeholder="Email Address"
        autoComplete="email"
        value={email}
        onChange={onEmailChange}
      />
      <Input
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        value={password}
        onChange={onPasswordChange}
      />
      <div>
        <Button onClick={onEmailSignin} disabled={!email || !password}>
          Sign In
        </Button>
        <ForgotPassword>
          <MutedLink to={ROUTES.FORGOT_PASSWORD}>Forgot password?</MutedLink>
        </ForgotPassword>
      </div>
    </AuthForm>
  );
};

const ForgotPassword = styled.div({
  paddingTop: 8,
  textAlign: 'right',
});

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <div>Don't have an account yet?</div>
      <DefaultLink to={ROUTES.SIGNUP}>Let's create one!</DefaultLink>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div({
  textAlign: 'center',
});
