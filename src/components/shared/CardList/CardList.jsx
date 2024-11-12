'use client';
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetGoodsQuery } from "@/redux/api/goodsApi";
import { useRouter } from "next/navigation";
import qs from 'qs'
import CyrillicToTranslit from 'cyrillic-to-translit-js';

import { BreadcrumbCustom, Card, } from "..";
import { Button, PaginationOutline, Title } from "@/components/ui";
import { SortingMenu } from "../../ui/sortingMenu";
import { setFilters, setPage } from "@/redux/features/filtersSlice";
import { setOpenFilters } from "@/redux/features/openSlice";
import { CategoryList } from "../categoryList";
import FilterIcon from '/public/image/svg/filter.svg';


export default function CardList() {
  const isFirstRender = useRef(true);
  const router = useRouter()
  const dispatch = useDispatch()
  let { limit, page, category, subCategory, color, minPrice, maxPrice } = useSelector((state) => state.filters);
  const cyrillicToTranslit = new CyrillicToTranslit();

  let a
  color === undefined ? a = '' : a = color

  const { products, totalProduct, totalPages, loading } = useGetGoodsQuery(`/catalog?category=${category}&subCategory=${subCategory}&color=${a}&minPrice=${minPrice}&maxPrice=${maxPrice}&page=${page}&limit=${limit}`,
    {
      selectFromResult: ({ data, isLoading }) => ({
        products: data?.products,
        totalProduct: data?.totalProduct,
        totalPages: data?.totalPages,
        loading: isLoading,
      }),
    },
  )


  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      params.category = cyrillicToTranslit.reverse(params.category, '-').toLowerCase()
      params.subCategory = cyrillicToTranslit.reverse(params.subCategory, '-').toLowerCase()
      dispatch(setFilters(params));
      isFirstRender.current = false;
    }
  }, []);


  useEffect(() => {
    const string = {
      category: category === "" ? null : cyrillicToTranslit.transform(category, '-').toLowerCase(),
      subCategory: subCategory === "" ? null : cyrillicToTranslit.transform(subCategory, '-').toLowerCase(),
      color: color === "" ? null : color,
      minPrice: minPrice === 100 ? null : minPrice,
      maxPrice: maxPrice === 10000 ? null : maxPrice,
      page,
      limit,
    }
    const queryString = qs.stringify(string, { skipNulls: true })
    router.push(`?${queryString}`);
  }, [category, subCategory, page, color, minPrice, maxPrice])


  useEffect(() => {
    if (isFirstRender.current) {
      dispatch(setPage(1))
    }
    window.scrollTo(0, 0)
  }, [])


  const handlePaginationClick = (e) => {
    dispatch(setPage(e.selected + 1))
  }


  return (
    <div className="bg-white pt-10 pb-20 font-mont w-full flex flex-col gap-5 xl:gap-10">
      <div className="relative flex flex-col gap-6">

        <div className="flex flex-col gap-6">
          <div>
            <BreadcrumbCustom category={category} subCategory={subCategory} />
          </div>
          <div>
            <Title
              text={
                category === '' && subCategory === '' ? 'каталог' : category
              }
              size="xl"
              className='font-mul font-extrabold uppercase' />
          </div>
        </div>
      </div>

      <CategoryList />

      <div className="h-[1px] w-full bg-[#EDEDED]"></div>

      <div className="flex justify-between items-center">
        <div>
          <p>{totalProduct} результати</p>
        </div>
        <div className="flex gap-5">

          <SortingMenu />

          <div onClick={() => dispatch(setOpenFilters(true))} className="button-outline">
            <Button variant='outline'>
              <FilterIcon />
              <p className="pl-1 lap:block mob:hidden font-semibold uppercase">фільтрувати</p>
            </Button>
          </div>

        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 lap:grid-cols-3 mob:grid-cols-2">
        {
          loading ?
            <h1>Loading...</h1>
            :
            Array.isArray(products) &&
            products.map((el) => {
              return (
                <div key={el.id} className="relative">
                  <Card el={el} />
                </div>
              )
            })
        }
      </div>

      <PaginationOutline
        totalPages={totalPages}
        totalProduct={totalProduct}
        onPaginationClick={handlePaginationClick}
        page={page}
      />

    </div>
  )
}