"use client";

import SectionName from "./SectionName";
import AuthorCard from "./AuthorCard";

import Link from "next/link";
import Image from "next/image";


export default function AuthorsList() {
    return (
        <section id="authors" className="mt-[192px]">
            <div className="flex flex-row items-center justify-between gap-2 [@media(max-width:1310px)]:flex-col [@media(max-width:1310px)]:items-start">
                <SectionName
                    titleName="Authors"
                />
                <Link href="#" className="flex items-center gap-2  text-[16px] uppercase font-bold">
                    All authors
                    <Image src="/utils/ri_arrow.svg" alt="arrow" width={16} height={16} />
                </Link>
            </div>
            <div className="mt-[96px] grid [@media(max-width:1310px)]:grid-cols-1 justify-center place-items-center grid-cols-2">
                <AuthorCard
                    imageSrc="/authors/01.jpg"
                    imageAlt="Author's photo"
                    authorName="Jakob Gronberg"
                    jobName="Artist"
                    cityName="Berlin"
                />
                <AuthorCard
                    imageSrc="/authors/02.jpg"
                    imageAlt="Author's photo"
                    authorName="Louise Jensen"
                    jobName="Artist"
                    cityName="Stockholm"
                />
                <AuthorCard
                    imageSrc="/authors/03.jpg"
                    imageAlt="Author's photo"
                    authorName="Anne Henry"
                    jobName="Photograph"
                    cityName="New York"
                />
                <AuthorCard
                    imageSrc="/authors/04.jpg"
                    imageAlt="Author's photo"
                    authorName="Anna Nihelsen"
                    jobName="Columnists"
                    cityName="Copenhugen"
                />
                <AuthorCard
                    imageSrc="/authors/05.jpg"
                    imageAlt="Author's photo"
                    authorName="Jane Cooper"
                    jobName="Artist"
                    cityName="Berlin"
                />
                <AuthorCard
                    imageSrc="/authors/06.jpg"
                    imageAlt="Author's photo"
                    authorName="Christofer Vaccaro"
                    jobName="Artist"
                    cityName="Lisobon "
                />
            </div>
        </section>
    )
}