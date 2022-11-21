import { useState } from 'react';
import * as Icon from 'react-feather';

const TableHead = ({ columns, handleSorting }) => {
  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor, sortable }) => {
          return (
            <Arrows
              key={label}
              label={label}
              accessor={accessor}
              sortable={sortable}
              handleSorting={handleSorting}
            />
          );
        })}
      </tr>
    </thead>
  );
};

const Arrows = ({ label, accessor, sortable, handleSorting }) => {
  const [sortField, setSortField] = useState('');
  const [order, setOrder] = useState('desc');
  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === 'asc' ? 'desc' : 'asc';
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };
  return (
    <th
      key={accessor}
      onClick={sortable ? () => handleSortingChange(accessor) : null}
    >
      {label}
      {sortable && (
        <span>
          {order == 'asc' ? (
            <button className="border-0 bg-transparent px-1 ms-4">
              <Icon.ChevronUp
                onClick={() => {
                  console.log('up');
                }}
              />
            </button>
          ) : (
            <button className="border-0 bg-transparent px-1 ms-4">
              <Icon.ChevronDown
                onClick={() => {
                  console.log('down');
                }}
              />
            </button>
          )}
        </span>
      )}
    </th>
  );
};

export default TableHead;
