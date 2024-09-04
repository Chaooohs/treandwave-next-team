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

  const title = 'Каталог';
  const tagsArr = ['брюки', 'спідниця', 'жакети', 'футболки', 'сукні']


  return (
    <div className="wrap">
      <CardList
        title={title}
        tags={tagsArr}
      />
    </div>
  )
}