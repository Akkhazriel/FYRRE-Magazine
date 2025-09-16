"use client";

export default function NewsTicker() {
    return (
        <section
            id="news-ticker"
            className="overflow-hidden bg-black text-white whitespace-nowrap sm:h-[60px] lg:h-[70px] flex items-center mt-8 md:mt-12"
        >
            <div className="flex animate-marquee">
                {/* Первая копия */}
                <span className="mr-8 flex items-center">
                    <span className="font-bold uppercase text-white sm:text-[18px] md:text-[20px] lg:text-[22px]">NEWS TICKER+++</span>
                    <span className="ml-2 text-white sm:text-[16px] md:text-[18px] lg:text-[20px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit +++
                    </span>
                </span>
                <span className="mr-8 flex items-center">
                    <span className="font-bold uppercase text-white sm:text-[18px] md:text-[20px] lg:text-[22px]">NEWS TICKER+++</span>
                    <span className="ml-2 text-white sm:text-[16px] md:text-[18px] lg:text-[20px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit +++
                    </span>
                </span>

                {/* Вторая копия — для бесшовного лупа */}
                <span className="mr-8 flex items-center">
                    <span className="font-bold uppercase text-white sm:text-[18px] md:text-[20px] lg:text-[22px]">NEWS TICKER+++</span>
                    <span className="ml-2 text-white sm:text-[16px] md:text-[18px] lg:text-[20px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit +++
                    </span>
                </span>
                <span className="mr-8 flex items-center">
                    <span className="font-bold uppercase text-white sm:text-[18px] md:text-[20px] lg:text-[22px]">NEWS TICKER+++</span>
                    <span className="ml-2 text-white sm:text-[16px] md:text-[18px] lg:text-[20px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit +++
                    </span>
                </span>
            </div>
        </section>
    )
}