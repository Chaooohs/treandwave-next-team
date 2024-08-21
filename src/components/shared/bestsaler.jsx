"use client";
import { useSelector } from "react-redux";
import { ButtonWithArrow, Card, Title } from "../ui";


export const BestSaler = () => {
  const goods = useSelector((state) => state.goods.goods);

  return (
    <section>
      <div className="wrap">
        <div className="content">

          <div className="flex items-center justify-between">
            <Title text="бестселери" size="xl" className="font-mul font-extrabold uppercase " />
            <ButtonWithArrow/>
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