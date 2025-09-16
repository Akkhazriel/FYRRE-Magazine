"use client";

import { useState } from "react"
import Link from "next/link";
import Image from "next/image";

import NavLink from "./NavLink";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="lg:hidden">
            {/* кнопка */}
            <button
                className="relative z-50 flex h-8 w-8 flex-col justify-between"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <span
                    className={`h-1 w-full bg-black transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-3" : ""
                        }`}
                />
                <span
                    className={`h1 w-full bg-black transition-opacity duration-300 ${isOpen ? "opacity-0" : ""
                        }`}
                />
                <span
                    className={`h-1 w-full bg-black transition-transform duration-300 ${isOpen ? "-rotate-45 translate-y-3" : ""
                        }`}
                />
            </button>

            {/* Выпадающее меню */}
            <div
                className={`fixed inset-0 z-40 bg-white transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <nav className="flex flex-col items-center justify-center h-full gap-10 text-xl font-medium">
                    <NavLink href="/">Magazine</NavLink>
                    <NavLink href="/authors">Authors</NavLink>
                    <NavLink href="/podcast">Podcast</NavLink>

                    <div className="flex gap-6">
                        <Link href="#">
                            <Image
                                src="/header/ri_instagram-line.svg"
                                alt="Instagram"
                                width={24}
                                height={24}
                                className="hover:scale-125 transition duration-300"
                            />
                        </Link>
                        <Link href="#">
                            <Image
                                src="/header/ri_twitter-fill.svg"
                                alt="Twitter"
                                width={24}
                                height={24}
                                className="hover:scale-125 transition duration-300"
                            />
                        </Link>
                        <Link href="#">
                            <Image
                                src="/header/ri_youtube-fill.svg"
                                alt="YouTube"
                                width={24}
                                height={24}
                                className="hover:scale-125 transition duration-300"
                            />
                        </Link>
                        <Link href="#">
                            <Image
                                src="/header/ri_rss-fill.svg"
                                alt="RSS"
                                width={24}
                                height={24}
                                className="hover:scale-125 transition duration-300"
                            />
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}