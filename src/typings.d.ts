interface AdditionalUserData {
  firstName: string;
  lastName: string;
}

interface UserDoc extends AdditionalUserData {
  email: string;
  photoUrl: string;
}

interface Message<T> {
  type: string;
  success: boolean;
  data?: T;
  error?: string;
  displayError?: string;
}
