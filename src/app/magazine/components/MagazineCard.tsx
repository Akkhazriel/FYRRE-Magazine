"use client";

import Image from "next/image";

interface MagazineCardProps {
    tag: string;
    date: string;
    imageSrc: string;
    imageAlt: string; 
    cardTitle: string;
    cardDesc: string;
    authorName: string;
    durationTime: string;
};


export default function MagazineCard({
    tag,
    date,
    imageSrc,
    imageAlt,
    cardTitle,
    cardDesc,
    authorName,
    durationTime,
}: MagazineCardProps) {
    return (
        <div className="p-[48px] border max-w-[507px]">
            <div className="max-w-[410px] flex flex-col gap-8">
                <div className="flex flex-row justify-between items-center">
                    <span className="font-normal text-[14px]">{date}</span>
                    <span className="border rounded-full px-3 py-2 text-[12px] uppercase">{tag}</span>
                </div>
                <Image src={imageSrc} alt={imageAlt} width={406} height={406} />
                <div className="flex flex-col items-start gap-[49px]">
                    <div className="flex flex-col gap-3">
                        <h3 className="font-bold text-[32px]">{cardTitle}</h3>
                        <p className="font-normal text-[16px]">
                            {cardDesc}
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <div className="flex flex-row items-center gap-2">
                            <span className="font-bold text-[14px]">Text</span>
                            <span className="font-normal text-[14px]">{authorName}</span>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <span className="font-bold text-[14px]">Duration</span>
                            <span className="font-normal text-[14px]">{durationTime}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}