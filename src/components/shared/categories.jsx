'use client'
import { useSelector } from "react-redux";
import { CardCategory, Title } from "../ui"


export const Categories = () => {
  const categories = useSelector(state => state.categories.categories)

  return (
    <section>
      <div className="wrap">
        <div className="content">
          <Title text="Категорії" size="xl" className="font-adi uppercase " />
          <div className="card-layout">
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
    </section>
  )
}