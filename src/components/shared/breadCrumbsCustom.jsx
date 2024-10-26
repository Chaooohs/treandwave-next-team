import Link from "next/link";

import { setSubCategory } from "@/redux/features/filtersSlice";
import { useDispatch } from "react-redux";

export function BreadcrumbCustom({ category, subCategory }) {
  const dispatch = useDispatch();

  return (
    <ul className="flex">

      <li className=" text-sm capitalize text-[#bababa]">
        <Link href="/"> головна&nbsp;</Link>
      </li>

      {category === ''
        ?
        <li className=" text-sm capitalize text-black">
          <span className="text-[#bababa]"> &nbsp;/&nbsp; </span>
          <span>каталог</span>
        </li>
        :
        <li
          className={` ${subCategory !== ""
            ? "text-sm capitalize cursor-pointer text-[#bababa]"
            : "text-sm capitalize text-black cursor-default"
            }`}
          onClick={() => dispatch(setSubCategory(""))}>
          <span className="text-[#bababa]"> &nbsp;/&nbsp; </span>
          <span> {category}</span>
        </li>
      }

      {subCategory === "" ? null : (
        <li className=" text-sm capitalize text-black">
          <span className="text-[#bababa]"> &nbsp;/&nbsp; </span>
          {subCategory}
        </li>
      )}

    </ul>
  );
}
