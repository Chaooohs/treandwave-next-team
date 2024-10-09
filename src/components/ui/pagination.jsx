'use client'
import ReactPaginate from "react-paginate";

export const PaginationOutline = ({ totalProduct, totalPages, onPaginationClick, page }) => {
  return (
    <div className="flex justify-center my-7">
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel="&#129138;"
        onPageChange={onPaginationClick}
        pageRangeDisplayed={2}
        pageCount={totalPages}
        // pageCount={Math.ceil(totalProduct / 10)}
        previousLabel="&#129136;"
        renderOnZeroPageCount={null}
        forcePage={page}
        previousClassName="prev"
        nextClassName="next"
        disabledClassName="disabled"
      />
    </div>
  );
}