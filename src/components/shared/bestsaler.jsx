import { ButtonWithArrow, Title } from "../ui";
import { Card } from "../shared";


export const BestSaler = ({ products }) => {

  const goods = products?.slice(10, 14);

  return (
    <section>
      <div className="wrap lg:p-0">
        <div className="content">
          <div className="wrap flex items-center justify-between">
            <Title text="бестселери" size="xl" className="font-mul font-extrabold uppercase lg:text-3xl " />
            <ButtonWithArrow />
          </div>
          <div className="lg:h-[450px] lg:relative">
            <div className="card-layout-home lg:absolute lg:inset-0 lg:pl-6">
              {Array.isArray(goods) &&
                goods.map((el) => {
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