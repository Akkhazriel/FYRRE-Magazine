"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    href: string
    children: React.ReactNode
}

export default function NavLink({href, children}: NavLinkProps) {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <Link
            href={href}
            aria-current={isActive ? "page" : undefined}
            className="
                relative
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:bg-black after:transition-all after:duration-300 
                after:w-0 hover:after:w-full
                aria-[current=page]:after:w-full
            "
        >
            {children}
        </Link>
    )
}