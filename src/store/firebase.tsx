import firebase, { User } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { createContext } from 'react';

export class FirebaseStore {
  public auth: firebase.auth.Auth;
  public provider: firebase.auth.GoogleAuthProvider;
  public db: firebase.firestore.Firestore;

  public constructor() {
    firebase.initializeApp({
      apiKey: process.env.FIREBASE_API_KEY,
      appId: process.env.FIREBASE_APP_ID,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    });

    this.auth = firebase.auth();
    this.provider = new firebase.auth.GoogleAuthProvider();
    this.db = firebase.firestore();
  }

  public getOrCreateUser = async (
    user: User | null,
    additionalUserData?: AdditionalUserData,
  ): Promise<Message<UserDoc>> => {
    if (!user)
      return {
        type: 'GENERATE_USER_DOC',
        success: false,
        error: 'User does not exist.',
        displayError: 'You are not signed in.',
      };

    const usersCollection = this.db.collection('users');
    const userRef = usersCollection.doc(user.uid);
    const snapshot = await userRef.get();
    const { email, photoURL } = user;

    if (!snapshot.exists) {
      try {
        const userDoc: UserDoc = {
          email: email || '',
          photoUrl: photoURL || '',
          firstName: user.displayName || '',
          lastName: '',
          ...additionalUserData,
        };

        await userRef.set(userDoc);

        return {
          type: 'GENERATE_USER_DOC',
          success: true,
          data: userDoc,
        };
      } catch (err) {
        return {
          type: 'GENERATE_USER_DOC',
          success: false,
          error: err.message,
          displayError: 'There was an error creating your account.',
        };
      }
    }

    return {
      type: 'GENERATE_USER_DOC',
      success: true,
      data: snapshot.data() as UserDoc,
    };
  };
}

export const FirebaseCtx = createContext<FirebaseStore>({} as FirebaseStore);
