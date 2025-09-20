"use client";

import Image from "next/image";
import Link from "next/link";

import SectionName from "./SectionName";

export default function PodcastList() {
    return (
        <section id="podcast" className="mt-24">
            <div className="flex flex-col items-start [@media(min-width:999px)]:flex-row [@media(min-width:999px)]:items-center justify-between [@media(min-width:999px)]:gap-6">
                <SectionName
                    titleName="Podcast"
                />
                <Link href="#" className="flex gap-4 uppercase items-center text-[16px] font-bold">
                    All Episodes
                    <Image src="/utils/ri_arrow.svg" alt="Utility icon right" width={16} height={16} />
                </Link>
            </div>
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-3">
                {/* Карточка 1 */}
                <div className="flex flex-col p-12 border gap-8">
                    <Image
                        src="/podcast/01.jpg"
                        alt="Podcast Cover"
                        width={411}
                        height={407}
                        className="w-full object-cover"
                    />
                    <div className="flex flex-col gap-12 items-center text-center [@media(min-width:1250px)]:text-start [@media(min-width:1250px)]:items-start">
                        <h3 className="text-[22px] font-bold leading-tight">
                            The Problem of today’s cultural development
                        </h3>
                        <div className="flex flex-col [@media(min-width:1250px)]:flex-row items-center gap-6 text-[14px]">
                            <p>
                                <span className="font-bold">Date </span>16.02.2022
                            </p>
                            <p>
                                <span className="font-bold">Duration </span>1h 20 min
                            </p>
                        </div>
                    </div>
                </div>

                {/* Карточка 2 */}
                <div className="flex flex-col p-12 border gap-8">
                    <Image
                        src="/podcast/02.jpg"
                        alt="Podcast Cover"
                        width={411}
                        height={407}
                        className="w-full object-cover"
                    />
                    <div className="flex flex-col gap-12">
                        <h3 className="text-[22px] font-bold leading-tight items-center text-center [@media(min-width:1250px)]:text-start [@media(min-width:1250px)]:items-start">
                            The hidden messages of Jack Nielson
                        </h3>
                        <div className="flex flex-col [@media(min-width:1250px)]:flex-row items-center gap-6 text-[14px]">
                            <p>
                                <span className="font-bold">Date </span>16.02.2022
                            </p>
                            <p>
                                <span className="font-bold">Duration </span>40 min
                            </p>
                        </div>
                    </div>
                </div>

                {/* Карточка 3 */}
                <div className="flex flex-col p-12 border gap-8">
                    <Image
                        src="/podcast/03.jpg"
                        alt="Podcast Cover"
                        width={411}
                        height={407}
                        className="w-full object-cover"
                    />
                    <div className="flex flex-col gap-12 items-center text-center [@media(min-width:1250px)]:text-start [@media(min-width:1250px)]:items-start">
                        <h3 className="text-[22px] font-bold ">
                            Behind the scenes of the street art culture
                        </h3>
                        <div className="flex flex-col [@media(min-width:1250px)]:flex-row items-center gap-6 text-[14px]">
                            <p>
                                <span className="font-bold">Date </span>16.06.2022
                            </p>
                            <p>
                                <span className="font-bold">Duration </span>45 min
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}