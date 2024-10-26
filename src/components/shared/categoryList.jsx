"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useDispatch } from "react-redux";

import { useGetCategoryListQuery } from "@/redux/api/goodsApi";
import { setCategory, setSubCategory } from "@/redux/features/filtersSlice";
import ArrowDown from '/public/image/svg/arrow-down.svg'

export const CategoryList = () => {
  const { data: catalogList } = useGetCategoryListQuery("/category");
  const dispatch = useDispatch()

  const handleClickAll = () => {
    dispatch(setCategory(''))
    dispatch(setSubCategory(''))
  }

  const handleClickCategory = (name) => {
    dispatch(setCategory(name))
    dispatch(setSubCategory(''))
  }

  const handleClickSubCategory = (subName) => {
    dispatch(setSubCategory(subName))
  }

  return (
    <>
      {catalogList && (
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleClickAll}
            className="py-2 px-4 border rounder border-white-500 font-semibold uppercase text-sm">
            усi
          </button>
          {catalogList.map((list) => {
            return (
              <Menu key={list.id}>
                <MenuButton
                  onClick={() => handleClickCategory(list.name)}
                  className="group flex gap-x-1 items-center py-2 px-4 border rounded border-white-500 font-semibold uppercase text-sm">
                  <span className="leading-[150%]">{list.name}</span>
                  <ArrowDown className='group-data-[open]:rotate-180' />
                </MenuButton>
                <MenuItems
                  anchor={{ to: 'bottom start', gap: '4px' }}
                  transition
                  className="bg-white border rounded border-white-500 w-52 transition duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0">
                  {list?.subCategories.map((sub) => {
                    return (
                      <MenuItem key={sub.id}>
                        <div
                          onClick={() => handleClickSubCategory(sub.name)}
                          className="p-1 font-semibold uppercase text-sm data-[focus]:bg-[#ededed] cursor-pointer"
                        >
                          {sub.name}
                        </div>
                      </MenuItem>
                    );
                  })}
                </MenuItems>
              </Menu>
            );
          })}
        </div>
      )}
    </>
  );
};
