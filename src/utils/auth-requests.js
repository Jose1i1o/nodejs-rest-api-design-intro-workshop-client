import axios from "axios";
import {
  getCurrentUserToken,
  getCurrentUser
} from "../firebase/firebase";

export async function syncUserData() {
  const userToken = await getCurrentUserToken();
  const user = await getCurrentUser();
  return axios({
    method: "POST",
    url: "http://localhost:4000/sign-up",
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    data: {
      firebaseId: user.uid,
      email: user.email,
    }
  });
}