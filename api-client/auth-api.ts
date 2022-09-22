import axiosClient from "./axios-client";
import { LoginPayload, UserProfileResponse, UserResponse } from "../models";

export const authApi = {
  login(payload: LoginPayload) {
    return axiosClient.post<UserResponse>(
      `https://django-staging.beautytap.com/auth/signin`,
      payload
    );
  },
  logout() {
    //    remove cookies
  },
  getProfile(username: string, access_token: string) {
    if (access_token) {
      return axiosClient.get<UserProfileResponse>(
        `https://django-staging.beautytap.com/users/${username}/profile`,
        {
          headers: { Authorization: `Bearer ${access_token}` },
        }
      );
    }
    return axiosClient.get<UserProfileResponse>(`/users/${username}/profile`);
  },
};
