'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import qs from 'qs'

import { BreadcrumbCustom, Card } from "@/components/shared";
import { Button, PaginationOutline, Title } from "@/components/ui";
import { useGetGoodsQuery } from "@/redux/api/goodsApi";
import { SortingMenu } from "@/components/ui/sortingMenu";
import FilterIcon from '/public/image/svg/filter.svg';
import { setOpenFilters } from "@/redux/features/openSlice";


export default function BestSeller() {
  const router = useRouter()
  const dispatch = useDispatch()
  let { limit, page, bestseller } = useSelector((state) => state.filters);
  let { products, totalProduct, totalPages, loading } = useGetGoodsQuery(`/catalog?bestseller=${bestseller}&page=${page}&limit=${limit}`,
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
    const string = {
      bestseller,
      page,
      limit,
    }
    const queryString = qs.stringify(string, { skipNulls: true })
    router.push(`?${queryString}`);
  }, [page, bestseller])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <main>
      <div className="wrap">
        <div className="content">

          <div className="flex flex-col gap-6 mb-10">
            <BreadcrumbCustom category='бестселери' subCategory='' />
            <Title text="бестселери" size="xl" className="font-mul font-extrabold uppercase lap:text-3xl mob:text-2xl " />
          </div>

          <div className="h-[1px] w-full bg-[#EDEDED]"></div>

          <div className="flex justify-between items-center mt-10 mb-6">
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
            {Array.isArray(products) &&
              products.map((el) => {
                return (
                  <div key={el.id} className="relative">
                    <Card el={el} />
                  </div>
                );
              })}
          </div>

          <PaginationOutline
            totalPages={totalPages}
            totalProduct={totalProduct}
            page={page}
          />
        </div>
      </div>
    </main>
  );
};