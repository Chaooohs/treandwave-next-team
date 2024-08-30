'use client';
import { useState } from "react";

import Image from "next/image";
import { Card } from "..";
import { Button, Title } from "@/components/ui";
import { Filter } from "../../ui/filter";
import { SortingMenu } from "../../ui/sortingMenu";



export default function CardList({ title, tags, image, products, totalGoods }) {
  const productsQuantity = products?.length;

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);  // Допустим, все товары уже загружены

  const applyFilters = (filters) => {
    console.log(filters);
    const filtered = allProducts.filter(product => {
      const matchesSize = filters.sizes.length === 0 || filters.sizes.includes(product.size);
      const matchesModel = filters.models.length === 0 || filters.models.includes(product.model);
      const matchesPrice = filters.prices.length === 0 || filters.prices.includes(product.priceRange);

      return matchesSize && matchesModel && matchesPrice;
    });

    setFilteredProducts(filtered);

  };

  return (
    <div className="bg-white pt-10 pb-20 font-mont w-full flex flex-col gap-5 lg:gap-10">
      <div className="relative flex flex-col gap-5 lg:gap-10">
        <div>
          Головна / Каталог
        </div>
        <div>
          <Title text={title} size="xl" className='font-mul font-extrabold uppercase' />
        </div>
        {image && (
          <div className="w-[86px] h-full absolute right-0">
            <Image src={image} alt='category image' className=" h-full object-contain" />
          </div>
        )}
      </div>
      {tags && (
        <div className="flex gap-3">

          {tags.map((item, index) => (
            <div key={index}>
              <Button variant='tag'>
                {item}
              </Button>
            </div>
          ))}
        </div>
      )}
      <div className="h-[1px] w-full bg-[#EDEDED]"></div>
      <div className="flex justify-between items-center">
        <div>
          <p>{totalGoods} результати</p>
        </div>
        <div className="flex gap-5">
          <SortingMenu />
          <Filter onApplyFilters={applyFilters} />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {
          Array.isArray(products) &&
          products.map((el) => {
            return (
              <div key={el.id} className="relative">
                <Card el={el} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}