import Link from "next/link";
import { CardCategory, Title } from "../ui"
import { useDispatch } from "react-redux";
import { setCategory } from "@/redux/features/filtersSlice";


export const Categories = ({ catalogList }) => {
  const dispatch = useDispatch()
  return (
    <section>
      <div className="wrap lap:p-0">
        <div className="content">
          <Title text="Категорії" size="xl" className="lap:px-6 mob:px-4 font-mul font-extrabold uppercase lap:text-3xl mob:text-2xl" />
          <div className="lap:h-[420px] lap:relative mob:h-[282px]">
            <div className="card-layout-home lap:absolute lap:inset-0 lap:px-6 mob:mt-6 mob:px-4">
              {Array.isArray(catalogList) &&
                catalogList.slice(4, 12).map((el) => {
                  return (
                    <Link
                      key={el.id}
                      href='/catalog'
                      onClick={() => dispatch(setCategory(el.name))}
                    >
                      <div className="mob:h-60 cursor-pointer">
                        <CardCategory el={el} />
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}