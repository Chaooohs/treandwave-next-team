import { ButtonWithArrow, Title } from "../ui";
import { Card } from "../shared";


export const BestSaler = ({ products }) => {

  const goods = products?.slice(10, 14);

  return (
    <section>
      <div  className="wrap lap:p-0">
        <div className="content">
          <div className="lap:px-6 mob:px-4 flex items-center justify-between">
            <Title text="бестселери" size="xl" className="font-mul font-extrabold uppercase lap:text-3xl mob:text-2xl " />
            <ButtonWithArrow />
          </div>
          <div className="lap:h-[450px] lap:relative mob:h-[368px]">
            <div className="card-layout-home lap:absolute lap:inset-0 lap:px-6 mob:px-4">
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