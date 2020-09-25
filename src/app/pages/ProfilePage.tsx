import React, { FC, useContext } from 'react';
import { FirebaseCtx } from 'store/firebase';
import { useUser } from 'utils/hooks/useUser';

export const ProfilePage: FC = () => {
  const { auth } = useContext(FirebaseCtx);
  const user = useUser();

  const onSignout = () => auth.signOut();

  return (
    <div>
      <h1>Profile</h1>
      <div>{user?.displayName}</div>
      <div>{user?.email}</div>
      <button onClick={onSignout}>Sign Out</button>
    </div>
  );
};
