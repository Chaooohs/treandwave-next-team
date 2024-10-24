'use client'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useDebouncedCallback } from "use-debounce"
import { usePathname } from "next/navigation"

import CardList from "@/components/shared/CardList/CardList"
import { setPage, setSearch } from "@/redux/features/filtersSlice"
import CloseIcon from '/public/image/svg/close.svg'
import SearchIcon from '/public/image/svg/search.svg'


export default function Page() {
  const pathname = usePathname()
  const dispatch = useDispatch()
  const [isSearchValue, setIsSearchValue] = useState('')


  const searchValueByTimer = useDebouncedCallback((value) => {
    dispatch(setSearch(value))
  }, 1000)

  const onChangeSearch = (value) => {
    searchValueByTimer(value)
    setIsSearchValue(value)
  }

  const onClearSearch = () => {
    setIsSearchValue('')
    dispatch(setSearch(''))
    dispatch(setPage('0'))
  }

  const title = 'пошук';

  return (
    <main>
      <div className="wrap">
        <div className="search-box relative">
          <SearchIcon className='absolute top-[38px] left-3'/>
          <input
            type="text"
            className="rounded border border-[#ededed] outline-none w-full h-[52px] bg-transparent box-border py-3 px-14 mt-6"
            placeholder="пошук"
            value={isSearchValue}
            onChange={(e) => onChangeSearch(e.target.value)}
          />
          <button
            className="absolute top-[38px] right-3"
            onClick={onClearSearch}
          >
            <CloseIcon />
          </button>
        </div>
        <CardList pathname={pathname} title={title} />
      </div>
    </main>
  )
}