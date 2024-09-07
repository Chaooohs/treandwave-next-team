'use client'
import { useSelector } from "react-redux";
import { CardCategory, Title } from "../ui"


export const Categories = () => {
  const categories = useSelector(state => state.categories.categories)

  return (
    <section>
      <div className="wrap lap:p-0">
        <div className="content">
          <Title text="Категорії" size="xl" className="lap:px-6 mob:px-4 font-mul font-extrabold uppercase lap:text-3xl mob:text-2xl" />
          <div className="lap:h-[420px] lap:relative mob:h-[282px]">
            <div className="card-layout-home lap:absolute lap:inset-0 lap:pl-6 mob:mt-6 mob:pl-4">
              {Array.isArray(categories) &&
                categories.map((el) => {
                  return (
                    <div key={el.id} className="mob:h-60">
                      <CardCategory el={el} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}