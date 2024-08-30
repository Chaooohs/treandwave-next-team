'use client'
import { useEffect, useState } from "react";

import CardList from "@/components/shared/CardList/CardList";
import PaginationOutlined from "@/components/ui/pagination";
import { useGetGoodsQuery } from "@/redux/api/goodsApi";


export default function Page() {
  const [isQuery, setIsQuery] = useState('')

  const { goods, totalGoods, pageNumber } = useGetGoodsQuery(`/products?limit=10&${isQuery}`, {
    selectFromResult: ({ data }) => ({
      goods: data?.goods,
      totalGoods: data?.totalGoods,
      pageNumber: data?.pageNumber,
    }),
  })

  const handlePaginationClick = (_, page) => {
    setIsQuery(`skip=${page - 1}0`)
  }

  useEffect(() => window.scrollTo(0, 0), [pageNumber])

  const title = 'Каталог';
  const tagsArr = ['брюки', 'спідниця', 'жакети', 'футболки', 'сукні']

  return (
    <>
      <div className="lg:px-24 px-5 w-full">
        <CardList title={title} tags={tagsArr} products={goods} totalGoods={totalGoods} />
      </div>
      <div>
        <PaginationOutlined
          totalGoods={totalGoods}
          pageNumber={pageNumber}
          onPaginationClick={handlePaginationClick}
        />
      </div>
    </>
  )
}