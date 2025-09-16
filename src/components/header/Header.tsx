"use client";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

export default function Header({showNav = true}: {showNav?: boolean}) {
    return (
        <header className="mt-16 pb-4 border-b border-black">
            <div className="flex justify-between items-center">
                <h2 className="text-[20px] font-bold uppercase select-none">FYRRE MAGAZINE</h2>
                {showNav && (
                    <>
                        <nav className="hidden lg:flex items-center gap-6">
                            <ul className="flex gap-6 items-center">
                                <li>
                                    <NavLink href="/">Magazine</NavLink>
                                </li>
                                <li>
                                    <NavLink href="/authors">Authors</NavLink>
                                </li>
                                <li>
                                    <NavLink href="/podcast">Podcast</NavLink>
                                </li>
                            </ul>
                            <span>—</span>
                            <ul className="flex items-center gap-6">
                                <li>
                                    <Link href="#">
                                        <Image
                                            src="/header/ri_instagram-line.svg"
                                            alt="Instagram"
                                            width={16}
                                            height={16}
                                            className="hover:scale-150 transition duration-300"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image
                                            src="/header/ri_twitter-fill.svg"
                                            alt="Twitter"
                                            width={16}
                                            height={16}
                                            className="hover:scale-150 transition duration-300"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image
                                            src="/header/ri_youtube-fill.svg"
                                            alt="Twitter"
                                            width={16}
                                            height={16}
                                            className="hover:scale-150 transition duration-300"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image
                                            src="/header/ri_rss-fill.svg"
                                            alt="Twitter"
                                            width={16}
                                            height={16}
                                            className="hover:scale-150 transition duration-300"
                                        />
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        {/* Мобильное меню */}
                        <MobileMenu />
                    </>
                )}
            </div>
        </header>
    )
}