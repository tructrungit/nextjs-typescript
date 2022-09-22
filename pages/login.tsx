import * as React from "react";
import { authApi } from "../api-client";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
import { AxiosResponse } from "axios";
import { UserResponse } from "../models";

export default function LoginPage() {
  async function handleLoginClick() {
    try {
      let user = await authApi.login({
        username: "trucdt",
        password: "123qwe!@#",
      });

      console.log(user);

      // @ts-ignore
      let access_token = user["access_token"];
      // @ts-ignore
      let access_expires = user["access_expires"];

      setCookie("access_token", access_token);
    } catch (error) {
      console.log("failed to login: ", error);
    }
  }

  async function handleGetProfileClick() {
    try {
      let access_token = getCookie("access_token");
      let profile = await authApi.getProfile("trucdt", String(access_token));
      console.log(profile);
    } catch (error) {
      console.log("failed to get profile: ", error);
    }
  }

  async function handleLogoutClick() {
    try {
      // authApi.logout();
      deleteCookie("access_token");
    } catch (error) {
      console.log("failed to logout: ", error);
    }
  }

  return (
    <div>
      <h1>Login page</h1>

      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleGetProfileClick}>Get profile</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}
