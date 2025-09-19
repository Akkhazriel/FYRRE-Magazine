"use client";

interface SectionNameProps {
    titleName: string,
}

export default function SectionName({
    titleName
}: SectionNameProps) {
    return (
        <h2 className="sm:text-[82px] md:text-[104px] font-semibold uppercase">{titleName}</h2>
    )
}