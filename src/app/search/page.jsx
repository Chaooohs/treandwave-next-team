'use client'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {useDebouncedCallback} from "use-debounce"
import { usePathname } from "next/navigation"

import CardList from "@/components/shared/CardList/CardList"
import { setSearch } from "@/redux/features/filtersSlice"


export default function Page() {
  const pathname = usePathname()
  const dispatch = useDispatch()
  const [isSearchValue, setIsSearchValue] = useState('')


  useEffect(() => {
    setIsSearchValue('')
  }, [])

  const searchValueByTimer = useDebouncedCallback((value) => {
    dispatch(setSearch(value))
  }, 1000)

  const onChangeSearch = (value) => {
    searchValueByTimer(value)
    setIsSearchValue(value)
  }


  return (
    <div className="wrap">
      <div className="search-box">
        <input
          type="search"
          className="rounded border border-[#ededed] outline-none w-full h-[52px] bg-transparent box-border p-3 mt-6"
          placeholder="пошук"
          value={isSearchValue}
          onChange={(e)=> onChangeSearch(e.target.value)}
        />
      </div>
      <CardList pathname={pathname} />
    </div>
  )
}