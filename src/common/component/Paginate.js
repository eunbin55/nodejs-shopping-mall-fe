import React from "react";
import ReactPaginate from "react-paginate";

export const Paginate = ({ handlePageClick, totalPageNum, searchQuery }) => {
  return (
    <ReactPaginate
      nextLabel="다음 >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={totalPageNum} // 전체페이지
      forcePage={searchQuery.page - 1}
      previousLabel="< 이전"
      renderOnZeroPageCount={null}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="active"
      className="display-center list-style-none"
    />
  );
};
