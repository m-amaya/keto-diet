import styled from '@emotion/styled';
import React, {
  FC,
  ChangeEventHandler,
  ReactEventHandler,
  useContext,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';

import { AuthMobileForm } from 'app/components/forms/AuthMobileForm';
import { Button } from 'app/components/forms/Button';
import { Input } from 'app/components/forms/Input';
import { OrDivider } from 'app/components/forms/OrDivider';
import { SubtleLink } from 'app/components/Link';
import { FirebaseCtx } from 'store/firebase';
import * as ROUTES from 'store/routes';

export const SignupMobile: FC = () => {
  const { auth, getOrCreateUser, provider } = useContext(FirebaseCtx);
  const history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<Message<any> | null>(null);

  const onFirstNameChange: ChangeEventHandler<HTMLInputElement> = ({
    currentTarget: { value },
  }) => setFirstName(value);

  const onLastNameChange: ChangeEventHandler<HTMLInputElement> = ({
    currentTarget: { value },
  }) => setLastName(value);

  const onEmailChange: ChangeEventHandler<HTMLInputElement> = ({
    currentTarget: { value },
  }) => setEmail(value);

  const onPasswordChange: ChangeEventHandler<HTMLInputElement> = ({
    currentTarget: { value },
  }) => setPassword(value);

  const onEmailSignup: ReactEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );
      const message = await getOrCreateUser(user, { firstName, lastName });

      if (!message.success) {
        console.error(message);
        setError(message);
        return;
      }

      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      history.push(ROUTES.SIGNIN);
    } catch (err) {
      const message: Message<null> = {
        type: 'EMAIL_SIGNUP',
        success: false,
        error: err.message,
        displayError: err.message,
      };

      console.error(message, err);
      setError(message);
    }
  };

  const onGoogleSignup = () => auth.signInWithPopup(provider);

  return (
    <AuthMobileForm footer={<Footer />}>
      {error && <div>{error.displayError}</div>}
      <Button className="google" onClick={onGoogleSignup}>
        Sign Up with Google
      </Button>
      <OrDivider />
      <Input
        type="text"
        placeholder="First Name"
        autoComplete="given-name"
        value={firstName}
        onChange={onFirstNameChange}
      />
      <Input
        type="text"
        placeholder="Last Name (optional)"
        autoComplete="family-name"
        value={lastName}
        onChange={onLastNameChange}
      />
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
      <Button
        disabled={!firstName || !email || !password}
        onClick={onEmailSignup}>
        Sign Up
      </Button>
    </AuthMobileForm>
  );
};

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
