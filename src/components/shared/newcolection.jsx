// "use client";
import { ButtonWithArrow, Title } from "../ui";
import { Card } from "../shared";

export const NewColection = ({ products }) => {

  const goods = products?.slice(6, 10);

  return (
    <section>
      <div className="wrap">
        <div className="content">

          <div className="flex items-center justify-between">
            <Title text="Нова колекція" size="xl" className="font-mul font-extrabold uppercase" />
            <ButtonWithArrow />
          </div>

          <div className="card-layout-home">
            {Array.isArray(goods) &&
              goods?.map((el) => {
                return (
                  <div key={el.id} className="relative lg:w-[224px]">
                    <Card el={el} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};
