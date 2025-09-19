"use client";

import Image from "next/image";

interface AuthorCardProps {
    imageSrc: string,
    imageAlt: string,
    authorName: string,
    jobName: string,
    cityName: string,
}

export default function AuthorCard({
    imageSrc,
    imageAlt,
    authorName,
    jobName,
    cityName,
}: AuthorCardProps) {
    return (
        // Карточка
        <div className="[@media(max-width:630px)]:h-[300px] [@media(max-width:630px)]:px-2 [@media(max-width:630px)]:flex-col [@media(max-width:630px)]:gap-2 [@media(max-width:630px)]:py-4 px-8 flex flex-row items-center gap-12 w-full max-w-[761px] h-[214px] border border-black">
            {/* Изображение */}
            <div className="relative w-[150px] h-[150px] max-[630px]:w-[150px] max-[630px]:h-[150px]">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover rounded-full"
                />
            </div>
            {/* Описание карточки */}
            <div className="flex flex-col items-start gap-4 [@media(max-width:630px)]:items-center">
                <h3 className="text-[32px] font-bold [@media(max-width:630px)]:text-[24px]">{authorName}</h3>
                <div className="flex items-center flex-row gap-8 [@media(max-width:630px)]:items-start [@media(max-width:630px)]:flex-col [@media(max-width:630px)]:gap-4">
                    <div className="flex items-center gap-2 flex-row">
                        <span className="text-[14px] font-bold">Job</span>
                        <span className="text-[14px]">{jobName}</span>
                    </div>
                    <div className="flex items-center gap-2 flex-row">
                        <span className="text-[14px] font-bold">City</span>
                        <span className="text-[14px]">{cityName}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}