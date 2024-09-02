'use client'
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import qs from 'qs'

import { PaginationOutline } from "@/components/ui";
import { useGetGoodsQuery } from "@/redux/api/goodsApi";
import { setFilters, setSkip } from "@/redux/features/filtersSlice";
import CardList from "@/components/shared/CardList/CardList";


export default function Page() {
  const router = useRouter()
  const pathname = usePathname()
  const dispatch = useDispatch()
  let { limit, skip } = useSelector((state) => state.filters);

  const { goods, totalGoods, pageNumber, loading } = useGetGoodsQuery(`/products?limit=${limit}&skip=${skip}`,
    {
      selectFromResult: ({ data, isLoading }) => ({
        goods: data?.goods,
        totalGoods: data?.totalGoods,
        pageNumber: data?.pageNumber,
        loading: isLoading,
      }),
    },
  )


  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(setFilters(params));
    }
  }, []);


  useEffect(() => {
    const string = {
      limit,
      skip,
    }
    const queryString = qs.stringify(string, { skipNulls: true })
    router.push(`?${queryString}`);
  }, [skip])


  const handlePaginationClick = (e) => {
    dispatch(setSkip(`${e.selected}0`))
  }


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pageNumber])


  const title = 'Каталог';
  const tagsArr = ['брюки', 'спідниця', 'жакети', 'футболки', 'сукні']


  return (
    <>
      <div className="wrap">
        <CardList
          title={pathname.substring(1)}
          tags={tagsArr}
          products={goods}
          totalGoods={totalGoods}
          loading={loading}
        />
      </div>

      <PaginationOutline
        totalGoods={totalGoods}
        onPaginationClick={handlePaginationClick}
        skip={skip}
      />
    </>
  )
}