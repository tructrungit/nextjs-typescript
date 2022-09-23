import * as React from "react";
import { useAuth } from "../hooks";
import {getCookie} from "cookies-next";

export default function LoginPage() {
  const { profile, login, logout } = useAuth({ revalidateOnMount: false });

  async function handleLoginClick() {
    try {
      await login();
      console.log("redirect to dashboard");
    } catch (error) {
      console.log("failed to login: ", error);
    }
  }

  // async function handleGetProfileClick() {
  //   try {
  //     let access_token = getCookie("access_token");
  //     let profile = await authApi.getProfile("trucdt", String(access_token));
  //     console.log(profile);
  //   } catch (error) {
  //     console.log("failed to get profile: ", error);
  //   }
  // }

  async function handleLogoutClick() {
    try {
      // authApi.logout();
      await logout();
    } catch (error) {
      console.log("failed to logout: ", error);
    }
  }

  return (
    <div>
      <h1>Login page</h1>

      <div>Profile: {JSON.stringify(profile || {}, null, "")}</div>

      <button onClick={handleLoginClick}>Login</button>
      {/*<button onClick={handleGetProfileClick}>Get profile</button>*/}
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}
