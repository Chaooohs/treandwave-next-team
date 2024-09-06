'use client'
import { useSelector } from "react-redux";
import { CardCategory, Title } from "../ui"


export const Categories = () => {
  const categories = useSelector(state => state.categories.categories)

  return (
    <section>
      <div className="wrap lg:p-0">
        <div className="content">
          <Title text="Категорії" size="xl" className="wrap font-mul font-extrabold uppercase lg:text-3xl" />
          <div className="lg:h-[420px] lg:relative">
            <div className="card-layout-home lg:absolute lg:inset-0 lg:pl-6">
              {Array.isArray(categories) &&
                categories.map((el) => {
                  return (
                    <div key={el.id}>
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