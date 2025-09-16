"use client";

import "./globals.css";
import Header from "@/components/header/Header";
import { usePathname } from "next/navigation"

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const pathname = usePathname()
  const showNav = pathname !== "/"

  return (
    <html lang="ru">
      <body>
        <div className="max-w-[1520px] mx-auto px-12 md:px-20">
          <Header showNav={showNav} />
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}