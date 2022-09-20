import React, { useEffect } from "react";
import { LayoutProps } from "../../models/index";
import Link from "next/link";

export interface IMainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
  useEffect(() => {
      console.log('Main Layout mounting')
      return () => console.log('Main Layout unmounting')
  }, []);

  return (
    <div>
      <h1>Main Layout</h1>

      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>

      <div>{children}</div>
    </div>
  );
}
