import { AuthError, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config";

const provider = new GoogleAuthProvider();

export const login = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (credential) {
      const token = credential.accessToken;
      const user = result.user;

      console.log("suck cess: ", token, user);
    }
  } catch (e) {
    const error = e as AuthError;

    const errorCode = error.code;
    const errorMessage = error.message;

    console.error(`${errorCode}: ${errorMessage}`);
  }
};
