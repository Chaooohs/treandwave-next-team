'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import qs from 'qs'

import { PaginationOutline } from "@/components/ui";
import { useGetGoodsQuery } from "@/redux/api/goodsApi";
import { setFilters, setSkip } from "@/redux/features/filtersSlice";
import CardList from "@/components/shared/CardList/CardList";


export default function Page() {
  const router = useRouter()
  const dispatch = useDispatch()
  let { limit, skip } = useSelector((state) => state.filters);


  const { goods, totalGoods, pageNumber } = useGetGoodsQuery(`/products?limit=${limit}&skip=${skip}`, {
    selectFromResult: ({ data }) => ({
      goods: data?.goods,
      totalGoods: data?.totalGoods,
      pageNumber: data?.pageNumber,
    }),
  })


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


  useEffect(() => window.scrollTo(0, 0), [pageNumber])


  const title = 'Каталог';
  const tagsArr = ['брюки', 'спідниця', 'жакети', 'футболки', 'сукні']


  return (
    <>
      <div className="wrap">
        <CardList title={title} tags={tagsArr} products={goods} totalGoods={totalGoods} />
      </div>

      <PaginationOutline
        totalGoods={totalGoods}
        onPaginationClick={handlePaginationClick}
        skip={skip}
      />
    </>
  )
}