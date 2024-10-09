'use client'
import ReactPaginate from "react-paginate";

export const PaginationOutline = ({ totalPages, onPaginationClick, page }) => {

  return (
    <div className="flex justify-center my-7">
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel="&#129138;"
        onPageChange={onPaginationClick}
        pageRangeDisplayed={2}
        pageCount={totalPages}
        previousLabel="&#129136;"
        renderOnZeroPageCount={null}
        forcePage={Number(page - 1)}
        previousClassName="prev"
        nextClassName="next"
        disabledClassName="disabled"
      />
    </div>
  );
}