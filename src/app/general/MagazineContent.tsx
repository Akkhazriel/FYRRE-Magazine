"use client";

import Link from "next/link";
import Image from "next/image";


export default function MagazineContent() {
  return (
    <section
      id="magazine-content"
      className="
        mt-[28px] flex flex-col items-center text-center
      "
    >
      <div className="
        lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-12 lg:text-left
        sm:flex sm:flex-col sm:items-center sm:text-center sm:max-auto sm:gap-12
      ">
        <div className="flex">
          <h2 className="sm:text-[58px] md:text-[82px] sm:max-w-[400px] md:max-w-[748px] lg:text-[104px] font-bold uppercase leading-none">{`Don't close your eyes`}</h2>
        </div>
        <div className="flex flex-col gap-16 max-w-[636px]">
          <p className="sm:text-[16px] md:text-[18px] font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.
          </p>
          <div className="sm:flex sm:items-center sm:justify-between sm:flex-col gap-6 md:flex-row">
            <div className="flex lg:gap-6 sm:gap-2 items-center">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[14px]">Text</span>
                <span className="font-normal text-[14px]">Jakob Gronberg</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-[14px]">Date</span>
                <span className="font-normal text-[14px]">16.March.2022</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-[14px]">Duration</span>
                <span className="font-normal text-[14px]">1 Min</span>
              </div>
            </div>
            <Link href='#' className="border border-black px-3 py-2 rounded-[100px]">
              Label
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-12">
        <Image src="/FrontPage/Magazine.jpg" alt="Обложка" width={1520} height={800}/>
      </div>
    </section>
  );
}
