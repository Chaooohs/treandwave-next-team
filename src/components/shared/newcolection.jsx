import { ButtonWithArrow, Title } from "../ui";
import { Card } from "../shared";

export const NewColection = ({ products }) => {

  const goods = products?.slice(6, 10);

  return (
    <section>
      <div className="wrap lg:p-0">
        <div className="content">
          <div className="lg:px-6 flex items-center justify-between">
            <Title text="Нова колекція" size="xl" className="font-mul font-extrabold uppercase lg:text-3xl" />
            <ButtonWithArrow />
          </div>
          <div className="lg:h-[450px] lg:relative">
            <div className="card-layout-home lg:absolute lg:inset-0 lg:pl-6">
              {Array.isArray(goods) &&
                goods?.map((el) => {
                  return (
                    <div key={el.id}>
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
