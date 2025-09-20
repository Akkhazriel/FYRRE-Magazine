"use client";

import Image from "next/image";

interface PageTitle {
    srcImage: string;
    altImage: string;
}

export default function PageTitle({ srcImage, altImage }: PageTitle) { 
    return (
        <section id="page-title" className="mt-8 md:mt-12 select-none">
            <Image src={srcImage} alt={altImage} width={1520} height={215} />
        </section>
    )
}