"use client";

import { useState } from "react";
import Image from "next/image";
import PageTitle from "./../general/PageTitle";
import MagazineCard from "./components/MagazineCard";
import { cards } from "./data/cards"; // импорт карточек

const categories = ["All", "Art", "Street Art", "Sculptures"];

export default function Magazine() {
  const [filter, setFilter] = useState("All");

  return (
    <div>
      <PageTitle srcImage="/magazine/Magazine.svg" altImage="Magazine" />

      <section
        id="MagazineGrid"
        className="flex flex-col gap-[67px] mt-[96px]"
      >
        {/* кнопки фильтра */}
        <div className="flex items-center justify-between gap-5">
          <h3 className="font-bold text-[16px] uppercase">Categories</h3>
          <div className="flex items-center gap-3">
            {categories.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-3 py-2 rounded-full border text-[12px] ${
                  filter === tag ? "bg-black text-white" : "bg-white"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* карточки */}
        <div className="grid [@media(max-width:850px)]:grid-cols-1 [@media(max-width:1250px)]:grid-cols-2 grid-cols-3 justify-items-center">
          {cards
            .filter(
              (c) =>
                filter === "All" ||
                c.tag.toLowerCase() === filter.toLowerCase()
            )
            .map((c, index) => (
              <MagazineCard key={index} {...c} />
            ))}
        </div>

        <button className="text-black font-bold text-[16px] flex flex-row items-center ml-auto gap-2">
            Next
            <Image src="utils/ri_arrow.svg" alt="arrrow-right" width={16} height={16}/>
        </button>
      </section>
    </div>
  );
}
