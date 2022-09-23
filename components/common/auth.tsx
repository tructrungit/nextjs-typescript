import React, { useEffect } from "react";
import { useAuth } from "../../hooks";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";

export interface AuthProps {
  children: any;
}

export function Auth({ children }: AuthProps) {
  const { profile, firstLoading } = useAuth();
  const router = useRouter();

  console.log("Auth: ", profile);

  useEffect(() => {
    let cookie = getCookie("access_token");
    // @ts-ignore
    if (!firstLoading && profile?.username && !cookie) {
      console.log("Redirect to login");
      router.push("/login");
    }
  }, [router, profile, firstLoading]);

  return <div>{children}</div>;
}
