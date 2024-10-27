'use client'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useDebouncedCallback } from "use-debounce"
import { useRouter } from "next/navigation"

import { setPage, setSearch } from "@/redux/features/filtersSlice"
import CloseIcon from '/public/image/svg/close.svg'
import SearchIcon from '/public/image/svg/search.svg'

import qs from 'qs'
import CyrillicToTranslit from 'cyrillic-to-translit-js';
import { Button, PaginationOutline } from "@/components/ui"
import { Card } from "@/components/shared"
import { useGetGoodsQuery } from "@/redux/api/goodsApi"
import { SortingMenu } from "@/components/ui/sortingMenu"
import FilterIcon from '/public/image/svg/filter.svg';


export default function Page() {
  const dispatch = useDispatch()
  const [isSearchValue, setIsSearchValue] = useState('')


  const router = useRouter()
  let { limit, page, search } = useSelector((state) => state.filters);
  const cyrillicToTranslit = new CyrillicToTranslit();
  const { products, totalProduct, totalPages, loading } = useGetGoodsQuery(`/catalog?&title=${search}&page=${page}&limit=${limit}`,
    {
      skip: search === '' ? true : false,
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
      title: search === "" ? null : cyrillicToTranslit.transform(search, '-').toLowerCase(),
      page,
      limit,
    }
    const queryString = qs.stringify(string, { skipNulls: true })
    router.push(`?${queryString}`);
  }, [page, search])


  const handlePaginationClick = (e) => {
    dispatch(setPage(e.selected + 1))
  }


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])




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
    dispatch(setPage('1'))
  }

  return (
    <main>
      <div className="wrap">
        <div className="search-box relative">
          <SearchIcon className='absolute top-[38px] left-3' />
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

        {search !== '' &&
          <div className="flex justify-between items-center mt-14">
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
        </div>}

        {search !== '' &&
          <div className="grid grid-cols-4 gap-5 lap:grid-cols-3 mob:grid-cols-2 mt-6">
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
        </div>}

        {search !== '' &&
          <PaginationOutline
          totalPages={totalPages}
          totalProduct={totalProduct}
          onPaginationClick={handlePaginationClick}
          page={page}
        />}
      </div>
    </main>
  )
}