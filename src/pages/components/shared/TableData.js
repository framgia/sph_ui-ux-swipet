import React from 'react';
import Pagination from './Pagination';

const TableData = ({
  tableHeaderNames,
  renderTableData,
  tableStyle,
  tHeadStyle,
  tDStyle,
  page,
  perPage,
  totalItems,
  lastPage,
  onPageChange,
}) => (
  <table className={tableStyle}>
    <thead className={tHeadStyle}>
      <tr>
        {tableHeaderNames.map((header, idx) => (
          <td key={idx} className={tDStyle}>
            {header.title}
          </td>
        ))}
      </tr>
    </thead>
    <tbody>
      {renderTableData()}
      <tr>
        <td>
          <Pagination
            page={page}
            perPage={perPage}
            totalItems={totalItems}
            pageCount={lastPage}
            onPageChange={onPageChange}
          />
        </td>
      </tr>
    </tbody>
  </table>
);

export default TableData;
