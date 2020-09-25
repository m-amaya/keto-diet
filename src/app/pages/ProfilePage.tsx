import React, { FC, useContext } from 'react';
import { FirebaseCtx } from 'store/firebase';
import { useUser } from 'utils/hooks/useUser';

export const ProfilePage: FC = () => {
  const { auth } = useContext(FirebaseCtx);
  const [loadingState, user] = useUser();

  const onSignout = () => auth.signOut();

  return (
    <div>
      <h1>Profile</h1>
      {loadingState !== 'loading' && (
        <div>
          <div>{user?.email}</div>
          <div>{user?.firstName}</div>
          <div>{user?.lastName}</div>
        </div>
      )}
      <button onClick={onSignout}>Sign Out</button>
    </div>
  );
};
