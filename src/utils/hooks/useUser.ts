import { useContext, useEffect, useState } from 'react';
import { FirebaseCtx } from 'store/firebase';

export const useUser = (): [LoadingState, UserDoc | null] => {
  const { auth, getOrCreateUser } = useContext(FirebaseCtx);
  const [loadingState, setLoadingState] = useState<LoadingState>('loading');
  const [user, setUser] = useState<UserDoc | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      const message = await getOrCreateUser(userAuth);

      if (!message.data) {
        console.error(message);
        setLoadingState('fail');
        return;
      }

      setLoadingState('success');
      setUser(message.data);
    });
  }, [auth]);

  return [loadingState, user];
};
