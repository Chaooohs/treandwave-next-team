"use client";
import { useSelector } from "react-redux";

import { Card, Title } from "../ui";
import Arrow from "../../../public/image/svg/arrow.svg";

export const BestSaler = () => {
  const goods = useSelector((state) => state.goods.goods);

  return (
    <section>
      <div className="wrap">
        <div className="content">

          <div className="flex items-center justify-between">
            <Title text="бестселери" size="xl" className="font-adi uppercase " />
            <div className="flex gap-x-1 header-link border-none">
              <button className="font-mont font-semibold text-base">переглянути все</button>
              <Arrow className="header-icon" />
            </div>
          </div>

          <div className="card-layout">
            {Array.isArray(goods) &&
              goods.map((el) => {
                return (
                  <div key={el.id} className="relative">
                    <Card el={el}/>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};