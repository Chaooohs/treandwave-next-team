'use client';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetGoodsQuery } from "@/redux/api/goodsApi";
import { useRouter } from "next/navigation";
import qs from 'qs'

import Image from "next/image";
import { BreadcrumbCustom, Card, Filters } from "..";
import { Button, PaginationOutline, Title } from "@/components/ui";
import { SortingMenu } from "../../ui/sortingMenu";
import { setFilters, setPage } from "@/redux/features/filtersSlice";
import { setOpenFilters } from "@/redux/features/openSlice";
import FilterIcon from '/public/image/svg/filter.svg';


export default function CardList({ title, tags, image, pathname, }) {
  const router = useRouter()
  const dispatch = useDispatch()
  let { limit, page, search } = useSelector((state) => state.filters);

  let category = ''
  switch (pathname) {
    case "/search":
      category = '/search'
      break;
    case "/sale":
      category = '/category/groceries'
      break;
    case "/collections":
      category = '/category/furniture'
      break;
    default:
      category = '';
  }

  const { products, totalProduct, totalPages, loading } = useGetGoodsQuery(`/catalog${category}?page=${page}&limit=${limit}`,
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
      dispatch(setFilters(params));
    }
  }, []);


  useEffect(() => {
    const string = {
      page,
      limit,
      q: search === "" ? null : search,
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


  const productsQuantity = products?.length;

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);  // Допустим, все товары уже загружены

  const applyFilters = (filters) => {
    const filtered = allProducts.filter(product => {
      const matchesSize = filters.sizes.length === 0 || filters.sizes.includes(product.size);
      const matchesModel = filters.models.length === 0 || filters.models.includes(product.model);
      const matchesPrice = filters.prices.length === 0 || filters.prices.includes(product.priceRange);

      return matchesSize && matchesModel && matchesPrice;
    });

    setFilteredProducts(filtered);

  };

  return (
    <div className="bg-white pt-10 pb-20 font-mont w-full flex flex-col gap-5 xl:gap-10">
      <div className="relative flex flex-col gap-6">
        {pathname !== '/search' && (
          <div className="flex flex-col gap-6">
            <div>
              <BreadcrumbCustom title={title} />
            </div>
            <div>
              <Title text={title} size="xl" className='font-mul font-extrabold uppercase' />
            </div>
          </div>
        )}
        {image && (
          <div className="w-[86px] h-full absolute right-0">
            <Image src={image} alt='category image' className=" h-full object-contain" />
          </div>
        )}
      </div>
      {tags && (
        <div className="flex flex-wrap gap-3">

          {tags.map((item, index) => (
            <div key={index}>
              <Button variant='tag'>
                {item}
              </Button>
            </div>
          ))}
        </div>
      )}
      {pathname !== '/search' && (
        <div className="h-[1px] w-full bg-[#EDEDED]"></div>
      )}
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
                  <Card el={el}/>
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