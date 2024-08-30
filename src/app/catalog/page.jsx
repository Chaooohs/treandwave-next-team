'use client'
import { useEffect, useState } from "react";

import { PaginationOutline } from "@/components/ui";
import { useGetGoodsQuery } from "@/redux/api/goodsApi";
import CardList from "@/components/shared/CardList/CardList";


export default function Page() {
  const [isQuery, setIsQuery] = useState('')

  const { goods, totalGoods, pageNumber } = useGetGoodsQuery(`/products?limit=10&${isQuery}`, {
    selectFromResult: ({ data }) => ({
      goods: data?.goods,
      totalGoods: data?.totalGoods,
      pageNumber: data?.pageNumber,
    }),
  })

  console.log(goods)

  const handlePaginationClick = (e) => {
    setIsQuery(`skip=${e.selected}0`)
  }

  useEffect(() => window.scrollTo(0, 0), [pageNumber])

  const title = 'Каталог';
  const tagsArr = ['брюки', 'спідниця', 'жакети', 'футболки', 'сукні']

  return (
    <>
      <div className="wrap">
        <CardList title={title} tags={tagsArr} products={goods} totalGoods={totalGoods} />
      </div>

      <PaginationOutline totalGoods={totalGoods} onPaginationClick={handlePaginationClick}/>
    </>
  )
}