import Image from "next/image";
import Link from "next/link";
import MagazineContent from "./general/MagazineContent";
import MagazineCard from "./general/MagazineCard";

import NewsTicker from "./general/NewsTicker";

export default function Home() {
  return (
    <div>

      <section id="page-title" className="mt-8 md:mt-12">
        <Image src="/pagetitle/Art & Life.svg" alt="ART & LIFE" width={1520} height={215} />
      </section>

      {/* Бегущая строка */}
      <NewsTicker />

      <MagazineContent />

      <section id="MagazineList" 
        className="
          mt-12 
          [@media(min-width:1220px)]:flex [@media(min-width:1220px)]:flex-row [@media(min-width:1220px)]:justify-between [@media(min-width:1220px)]:gap-20 [@media(min-width:1220px)]:items-start 
          sm:flex sm:flex-col sm:gap-12
          "
      >
        <div className="flex flex-col gap-12 max-w-[980px]">
          <MagazineCard
            imageSrc="/MagazineList/01.jpg"
            imageAlt="Magazine Cover"
            title="Hope dies last"
            description="
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.
          "
            author="Jakob Gronberg"
            date="16. March 2022"
            readTime="1 Min"
            tag="Art"
            tagHref="#"
          />
          <MagazineCard
            imageSrc="/MagazineList/02.jpg"
            imageAlt="Magazine Cover"
            title="The best art museums"
            description="
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.
          "
            author="Jakob Gronberg"
            date="16. March 2022"
            readTime="1 Min"
            tag="Sculptures"
            tagHref="#"
          />
          <MagazineCard
            imageSrc="/MagazineList/03.jpg"
            imageAlt="Magazine Cover"
            title="The devil is the details"
            description="
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.
          "
            author="Jakob Gronberg"
            date="16. March 2022"
            readTime="1 Min"
            tag="Art"
            tagHref="#"
          />
          <MagazineCard
            imageSrc="/MagazineList/04.jpg"
            imageAlt="Magazine Cover"
            title="An inde­struc­tible hope"
            description="
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.
          "
            author="Jakob Gronberg"
            date="16. March 2022"
            readTime="1 Min"
            tag="Art"
            tagHref="#"
          />
          <MagazineCard
            imageSrc="/MagazineList/05.jpg"
            imageAlt="Magazine Cover"
            title="Street art festival"
            description="
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.
          "
            author="Jakob Gronberg"
            date="16. March 2022"
            readTime="1 Min"
            tag="street Art"
            tagHref="#"
          />
          <MagazineCard
            imageSrc="/MagazineList/06.jpg"
            imageAlt="Magazine Cover"
            title="Through the eyes of street artists"
            description="
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.
          "
            author="Jakob Gronberg"
            date="16. March 2022"
            readTime="1 Min"
            tag="street Art"
            tagHref="#"
          />
        </div>
        <div className="hidden [@media(min-width:1220px)]:flex [@media(min-width:1220px)]:flex-col [@media(min-width:1220px)]:gap-16 [@media(min-width:1220px)]:items-start">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col">
              <span className="font-semibold text-[16px]">PRINTMAGAZINE</span>
              <h3 className="font-bold text-5xl">03/2022</h3>
            </div>
            <div className="flex flex-col gap-4">
              <Image src="/MagazineList/07.jpg" alt="Aside cover" width={400} height={500} />
              <Link href="#" className="px-6 py-3.5 bg-black max-w-[106px] text-white uppercase text-[14px] text-center">Button</Link>
            </div>
          </div>
          <div className="flex flex-col items-start gap-8">
            <h2 className="text-[16px] font-bold uppercase">MOST POPULAR</h2>
            <div className="flex flex-col gap-6">
              <div className="flex flex-row items-start gap-4">
                <p className="text-2xl font-bold">01</p>
                <div className="flex flex-col items-start gap-4">
                  <h5 className="text-2xl font-bold">Street Art festival</h5>
                  <p className="text-[14px] font-normal flex items-center gap-2">
                    <span className="text-[14px] font-semibold">Text</span>
                    Cristofer Vaccaro
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-4 border-t border-black pt-6">
                <p className="text-2xl font-bold">02</p>
                <div className="flex flex-col items-start gap-4">
                  <h5 className="text-2xl font-bold">Hope dies last</h5>
                  <p className="text-[14px] font-normal flex items-center gap-2">
                    <span className="text-[14px] font-semibold">Text</span>
                    Anne Hanry
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-4 border-t border-black pt-6">
                <p className="text-2xl font-bold">03</p>
                <div className="flex flex-col items-start gap-4">
                  <h5 className="text-2xl font-bold">Artists who want to rise above</h5>
                  <p className="text-[14px] font-normal flex items-center gap-2">
                    <span className="text-[14px] font-semibold">Text</span>
                    Anna Nielsen
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>

    </div>
  );
}
