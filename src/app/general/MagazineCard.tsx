"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface MagazineCardProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    author: string;
    date: string;
    readTime: string;
    tag: string;
    tagHref: string;
}

export default function MagazineCard({
    imageSrc,
    imageAlt,
    title,
    description,
    author,
    date,
    readTime,
    tag,
    tagHref,
}: MagazineCardProps) {
    const router = useRouter();
    return (
        <div onClick={() => router.push("/magazine")} className="flex flex-row lg:gap-12 sm:gap-6">
            {/* Изображение */}
            <div className="flex flex-row sm:max-w-[140px] sm:max-h-[140px] md:max-w-[480px] md:max-h-[480px]">
                <Image src={imageSrc} alt={imageAlt} width={480} height={480} />
            </div>

            {/* Контент */}
            <div className="sm:flex sm:flex-col sm:items-start sm:gap-8 md:flex md:flex-col md:items-start md:gap-16">
                {/* Заголовок и описание */}
                <div className="flex flex-col gap-3">
                    <h2 className="sm:text-[16px] sm:font-bold lg:text-[32px] lg:font-bold">{title}</h2>
                    <p className="sm:text-[12px]  lg:text-[16px] lg:font-normal">{description}</p>
                </div>

                {/* Нижний блок */}
                <div className="flex flex-row justify-between items-center w-full">
                    <div className="
                    sm:flex sm:flex-col sm:gap-2 sm:items-start
                    md:flex md:flex-row md:gap-6 md:items-center">
                        <div className="flex gap-2 items-center md:text-[14px] sm:text-[10px]">
                            <span className="font-bold sm:text-[10px] lg:text-[14px]">Text</span>
                            {author}
                        </div>
                        <div className="flex gap-2 items-center md:text-[14px] sm:text-[10px]">
                            <span className="font-bold sm:text-[10px] lg:text-[14px]">Date</span>
                            {date}
                        </div>
                        <div className="flex gap-2 items-center md:text-[14px] sm:text-[10px]">
                            <span className="font-bold sm:text-[10px] lg:text-[14px]">Read</span>
                            {readTime}
                        </div>
                    </div>

                    {/* Тэг */}
                    <Link
                        href={tagHref}
                        className="sm:text-[10px] sm:px-1.5 sm:py-1 sm:rounded-[50px] lg:text-[12px] font-normal lg:px-3 lg:py-2 border border-black lg:rounded-[100px] uppercase"
                    >
                        {tag}
                    </Link>
                </div>
            </div>
        </div>
    )
}