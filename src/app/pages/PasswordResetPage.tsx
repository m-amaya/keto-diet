import React, {
  ChangeEventHandler,
  FC,
  ReactEventHandler,
  useContext,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import { FirebaseCtx } from 'store/firebase';
import * as ROUTES from 'store/routes';

export const PasswordResetPage: FC = () => {
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
    <div>
      <h1>Password Reset</h1>
      <form>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={onEmailChange}
        />
        <button onClick={onSubmit}>Send me a reset link</button>
      </form>
      <Link to={ROUTES.SIGNIN}>Back to Sign In</Link>
    </div>
  );
};
