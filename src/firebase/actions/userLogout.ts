import { auth } from "../config";

export const logout = async () => {
  try {
    await auth.signOut();
  } catch (e) {
    console.error(e);
  }
};
