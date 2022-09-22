import useSWR from "swr";
import { PublicConfiguration } from "swr/dist/types";
import { authApi } from "../api-client";
import { deleteCookie, setCookie } from "cookies-next";

export function useAuth(option?: Partial<PublicConfiguration>) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR("https://django-staging.beautytap.com/users/trucdt/profile", {
    dedupingInterval: 60 * 60 * 1000,
    revalidateOnFocus: false,
    ...option,
  });

  async function login() {
    let user = await authApi.login({
      username: "trucdt",
      password: "123qwe!@#",
    });
    // @ts-ignore
    let access_token = user["access_token"];
    setCookie("access_token", access_token);

    await mutate();
  }

  async function logout() {
    deleteCookie("access_token");
    await mutate({}, false);
  }

  return {
    profile,
    error,
    login,
    logout,
  };
}
