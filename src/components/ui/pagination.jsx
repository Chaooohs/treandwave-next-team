'use client'
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";

import { setPage } from "@/redux/features/filtersSlice";

export const PaginationOutline = ({ totalPages,  page }) => {
  const dispatch = useDispatch()

  return (
    <div className="flex justify-center my-7">
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel="&#10095;"
        onPageChange={(e) => dispatch(setPage(e.selected + 1))}
        pageRangeDisplayed={2}
        pageCount={totalPages}
        previousLabel="&#10094;"
        renderOnZeroPageCount={null}
        forcePage={Number(page - 1)}
        previousClassName="prev"
        nextClassName="next"
        disabledClassName="disabled"
      />
    </div>
  );
}