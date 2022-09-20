import * as React from "react";
import { LayoutProps } from "../../models/index";
import Link from "next/link";

export function AdminLayout({ children }: LayoutProps) {
    return (
        <div>
            <div>{children}</div>
        </div>
    );
}
