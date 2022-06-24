import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ page, perPage, totalItems, pageCount, onPageChange }) => {
  const amountPerPage = () => {
    const start = page * perPage - (perPage - 1);
    const end = Math.min(start + perPage - 1, totalItems);

    return `${start} - ${end} of ${totalItems}`;
  };

  return (
    <div className='align-items-center flex'>
      <p>{totalItems > 0 ? amountPerPage() : ''}</p>
      <ReactPaginate
        containerClassName='pagination'
        pageLinkClassName='page-link'
        breakLinkClassName='break-link'
        previousClassName='previous'
        nextClassName='next'
        activeClassName='active'
        breakLabel='...'
        nextLabel='Next'
        onPageChange={({ selected }) => onPageChange(selected)}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel='Prev'
        renderOnZeroPageCount={null}
        forcePage={page - 1}
      />
    </div>
  );
};

export default Pagination;
