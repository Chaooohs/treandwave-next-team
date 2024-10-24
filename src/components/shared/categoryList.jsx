"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useDispatch } from "react-redux";

import { useGetCategoryListQuery } from "@/redux/api/goodsApi";
import { setCategory, setSubCategory } from "@/redux/features/filtersSlice";

export const CategoryList = () => {
  const { data: catalogList } = useGetCategoryListQuery("/category");
  const dispatch = useDispatch()

  const handleClickCategory = (name) => {
    dispatch(setCategory(name))
    dispatch(setSubCategory(''))
  }

  const handleClickSubCategory = (subName) => {
    dispatch(setSubCategory(subName))
    // dispatch(setCategory(''))
  }

  return (
    <>
      {catalogList && (
        <div className="flex flex-wrap gap-3">
          {catalogList.map((list) => {
            return (
              <Menu key={list.id}>
                <MenuButton
                  onClick={() => handleClickCategory(list.name)}
                  className="py-2 px-4 border rounder border-white-500 font-semibold uppercase text-sm">
                  {list.name}
                </MenuButton>
                <MenuItems
                  anchor={{ to: 'bottom start', gap: '4px' }}
                  className="bg-white border rounder border-white-500 w-52">
                  {list?.subCategories.map((sub) => {
                    return (
                      <MenuItem key={sub.id}>
                        <div
                          onClick={() => handleClickSubCategory(sub.name)}
                          className="block p-1 font-semibold uppercase text-sm data-[focus]:bg-black data-[focus]:text-white"
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
