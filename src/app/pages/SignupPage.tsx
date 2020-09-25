import React, {
  FC,
  ChangeEventHandler,
  ReactEventHandler,
  useContext,
  useState,
} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FirebaseCtx } from 'store/firebase';
import * as ROUTES from 'store/routes';

export const SignupPage: FC = () => {
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
    <div>
      <h1>Sign Up</h1>
      {error && <div>{error.displayError}</div>}
      <form>
        <input
          type="text"
          placeholder="First Name"
          autoComplete="given-name"
          value={firstName}
          onChange={onFirstNameChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          autoComplete="family-name"
          value={lastName}
          onChange={onLastNameChange}
        />
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
        <button onClick={onEmailSignup}>Sign Up</button>
        <div>or</div>
        <button onClick={onGoogleSignup}>Sign Up with Google</button>
      </form>
      <div>
        Already have an account? <Link to={ROUTES.SIGNUP}>Sign in here</Link>
      </div>
    </div>
  );
};
