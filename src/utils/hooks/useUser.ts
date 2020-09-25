import { useContext, useEffect, useState } from 'react';
import { FirebaseCtx } from 'store/firebase';

export const useUser = () => {
  const { auth, getOrCreateUser } = useContext(FirebaseCtx);
  const [user, setUser] = useState<UserDoc | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      const message = await getOrCreateUser(userAuth);

      if (!message.data) {
        console.error(message);
        return;
      }

      setUser(message.data);
    });
  }, [auth]);

  return user;
};
