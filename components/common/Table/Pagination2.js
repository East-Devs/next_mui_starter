import React from 'react';

const Pagination = ({
  recordPerPage,
  tableData,
  currentPage,
  setCurrentPage,
}) => {
  const pageLimit = 5;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(tableData / recordPerPage); i++) {
    pageNumbers.push(i);
  }
  const nextPage = () => {
    if (currentPage >= pageNumbers[pageNumbers.length - 1]) {
      return;
    }
    if (currentPage !== pageNumbers[-1]) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  const StartPagination = () => {
    if (1 === currentPage) {
      return null;
    }
    return (
      <div style={{ display: 'flex' }}>
        <li className={`page-item `}>
          <a onClick={() => setCurrentPage(1)} className="page-link">
            {1}
          </a>
        </li>
        <li style={{ marginLeft: '1rem' }}>....</li>
      </div>
    );
  };

  const EndPagination = () => {
    let last = pageNumbers[pageNumbers.length - 1];
    if (last <= currentPage + pageLimit) {
      return null;
    }
    return (
      <div style={{ display: 'flex' }}>
        <li style={{ marginRight: '1rem' }}>....</li>
        <li className={`page-item `}>
          <a onClick={() => setCurrentPage(last)} className="page-link">
            {last}
          </a>
        </li>
      </div>
    );
  };

  const getPaginationGroup = () => {
    let arr = [];
    let last = pageNumbers[pageNumbers.length - 1];
    for (let i = 0; i < pageLimit; i++) {
      if (currentPage + i >= last) {
        console.log(currentPage, '+', i, '-', pageLimit, '+', 1);
        arr.push(currentPage + i - pageLimit + 1);
      } else {
        arr.push(currentPage + i);
      }

      // }
    }

    return arr;
  };
  return (
    <nav
      style={{
        position: 'absolute',
        marginTop: '5rem',
        paddingBottom: '5rem',
        marginLeft: '30rem',
      }}
    >
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" onClick={prevPage}>
            Prev
          </a>
        </li>
        <StartPagination />
        {getPaginationGroup().map((number) => (
          <li
            key={number}
            className={`page-item ${
              currentPage === number ? 'paginationActive' : null
            }`}
          >
            <a onClick={() => setCurrentPage(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
        <EndPagination />
        <li className="page-item">
          <a className="page-link" onClick={nextPage}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
