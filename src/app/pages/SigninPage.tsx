import React, {
  FC,
  ChangeEventHandler,
  ReactEventHandler,
  useContext,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
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
    <div>
      <h1>Sign In</h1>
      <form>
        <input
          type="email"
          placeholder="Email"
          autoComplete="email"
          value={email}
          onChange={onEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          value={password}
          onChange={onPasswordChange}
        />
        <button onClick={onEmailSignin}>Sign In</button>
        <div>or</div>
        <button onClick={onGoogleSignin}>Sign In with Google</button>
      </form>
      <div>
        Don't have an account? <Link to={ROUTES.SIGNUP}>Sign up here</Link>
      </div>
      <div>
        <Link to={ROUTES.PASSWORD_RESET}>Forgot password?</Link>
      </div>
    </div>
  );
};
