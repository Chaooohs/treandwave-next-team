import Link from "next/link";

import { setSubCategory } from "@/redux/features/filtersSlice";
import { useDispatch } from "react-redux";

export function BreadcrumbCustom({ category, subCategory }) {
  const dispatch = useDispatch();

  return (
    <ul className="flex">

      <li className=" text-sm capitalize text-red-500">
        <Link href="/"> головна&nbsp;</Link>
      </li>

      {category === ''
        ?
        <li className=" text-sm capitalize text-black">
          <span> &nbsp;/&nbsp; </span>
          <span>каталог</span>
        </li>
        :
        <li
          className={` ${subCategory !== ""
            ? "text-sm capitalize cursor-pointer text-red-500"
            : "text-sm capitalize text-black cursor-default"
            }`}
          onClick={() => dispatch(setSubCategory(""))}>
          <span> &nbsp;/&nbsp; </span>
          <span> {category}</span>
        </li>
      }

      {subCategory === "" ? null : (
        <li className=" text-sm capitalize text-black">
          <span> &nbsp;/&nbsp; </span>
          {subCategory}
        </li>
      )}

    </ul>
  );
}
