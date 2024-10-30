"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Card } from "../shared";
import { ButtonWithArrow, Title } from "../ui";

export const BestSaler = ({ bestsellers }) => {
  const [randomCards, setRandomCards] = useState([]);

  useEffect(() => {
    if (Array.isArray(bestsellers)) {
      const shuffledArray = [...bestsellers].sort(() => Math.random() - 0.5);
      setRandomCards(shuffledArray.slice(0, 4));
    }
  }, [bestsellers]);

  return (
    <section>
      <div className="wrap lap:p-0">
        <div className="content">
          <div className="lap:px-6 mob:px-4 flex items-center justify-between">
            <Title
              text="бестселери"
              size="xl"
              className="font-mul font-extrabold uppercase lap:text-3xl mob:text-2xl "
            />
            <Link href={"/bestseller"}>
              <ButtonWithArrow />
            </Link>
          </div>
          <div className="lap:h-[500px] lap:relative mob:h-[400px]">
            <div className="card-layout-home lap:absolute lap:inset-0 lap:px-6 mob:px-4">
              {Array.isArray(randomCards) &&
                randomCards.map((el) => {
                  return (
                    <div key={el.id} className="relative">
                      <Card el={el} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
