"use client";

import "./globals.css";
import Header from "@/components/header/Header";
import { usePathname } from "next/navigation"
import { FormEvent } from "react";
import { FaInstagram, FaTwitter, FaYoutube, FaRss } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const pathname = usePathname()
  const showNav = pathname !== "/"
  const [count, setCount] = useState(8);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    console.log("Email submitted:", email);
    // здесь можно добавить fetch/axios для отправки на сервер
  };

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) {
        setCount(4); // мобилка → меньше элементов
      } else {
        setCount(8); // десктоп → больше элементов
      }
    };

    updateCount(); // вызвать при монтировании
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return (
    <html lang="ru">
      <body>
        <div className="max-w-[1520px] mx-auto px-12 md:px-20">
          <Header showNav={showNav} />
          <main>
            {children}
          </main>
        </div>
        <footer className="mt-[195px] bg-black">
          {/* бегущая строка */}
          <div className="relative w-full overflow-hidden bg-black h-[60px] flex items-center">
            {/* первая лента */}
            <div className="flex whitespace-nowrap animate-marqueeQ ">
              {Array.from({ length: count }).map((_, i) => (
                <span
                  key={`q-${i}`}
                  className="mx-6 text-[20px] sm:text-[18px] text-white font-bold"
                >
                  NEWSLETTER+++
                </span>
              ))}
            </div>

            {/* вторая лента */}
            <div className="flex whitespace-nowrap animate-marqueeW absolute">
              {Array.from({ length: count }).map((_, i) => (
                <span
                  key={`w-${i}`}
                  className="mx-6 text-[20px] sm:text-[18px] text-white font-bold"
                >
                  NEWSLETTER+++
                </span>
              ))}
            </div>
          </div>

          {/* заголовок + форма */}
          <div className="max-w-[1520px] mx-auto px-6 sm:px-10 md:px-20">
            <div
              className="
              flex flex-col items-start gap-6 mt-[80px]
              md:mt-[128px]
              md:flex-col
              lg:flex-row lg:items-center lg:justify-between
            "
            >
              <h2
                className="
                  text-[40px] sm:text-[48px] md:text-[56px] lg:text-[80px]
                  font-bold uppercase text-white leading-[1.1]
                  max-w-full lg:max-w-[790px]
                "
              >
                Design News to your inbox
              </h2>
              <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="flex-1 px-4 py-2 outline-none text-black bg-white"
                />
                <button
                  type="submit"
                  className="px-6 py-2 border-l border-black font-semibold uppercase tracking-wide text-black bg-white"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>

          {/* нижний футер */}
          <div className="max-w-[1520px] mx-auto px-6 sm:px-10 md:px-20 py-16 sm:py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
              {/* Logo */}
              <div>
                <h2 className="text-xl font-bold uppercase text-white">
                  FYRRE MAGAZINE
                </h2>
              </div>

              {/* Column 1 */}
              <ul className="space-y-2 text-white">
                <li>
                  <Link href="#">Art</Link>
                </li>
                <li>
                  <Link href="#">Design</Link>
                </li>
                <li>
                  <Link href="#">Architecture</Link>
                </li>
              </ul>

              {/* Column 2 */}
              <ul className="space-y-2 text-white">
                <li>
                  <Link href="#">Magazine</Link>
                </li>
                <li>
                  <Link href="#">Podcast</Link>
                </li>
                <li>
                  <Link href="#">Authors</Link>
                </li>
              </ul>

              {/* Column 3 + соцсети */}
              <div className="flex flex-col justify-between gap-5">
                <ul className="space-y-2 text-white">
                  <li>
                    <Link href="#">Styleguide</Link>
                  </li>
                  <li>
                    <Link href="#">Licensing</Link>
                  </li>
                  <li>
                    <Link href="#">Changelog</Link>
                  </li>
                </ul>
                <div className="flex space-x-4 mt-6 text-white text-lg">
                  <Link href="#">
                    <FaInstagram />
                  </Link>
                  <Link href="#">
                    <FaTwitter />
                  </Link>
                  <Link href="#">
                    <FaYoutube />
                  </Link>
                  <Link href="#">
                    <FaRss />
                  </Link>
                </div>
              </div>
            </div>

            {/* Копирайт */}
            <div className="mt-12 text-sm text-gray-400">
              © Made by Pawel Gola — Powered by Webflow
            </div>
          </div>
        </footer>


      </body>
    </html>
  );
}
