import * as React from "react";
import { LayoutProps } from "../../models/index";
import Link from "next/link";

export function EmptyLayout({ children }: LayoutProps) {
    return (
        <div>
            <h1>Admin Layout</h1>
            <div>Sidebar</div>

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
