import { useState, useEffect } from 'react';
import TableBody from './TableBody';
import TableHead from './TableHead';
import './sort.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Table = ({ tableDatas, translation }) => {
  const [tableData, setTableData] = useState(tableDatas);
  useEffect(() => {
    setTableData(tableDatas);
  }, [tableDatas]);
  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), 'en', {
            numeric: true,
          }) * (sortOrder === 'asc' ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };
  const columns = [
    {
      label: translation.translate('selectboard'),
      accessor: 'board_id',
      sortable: true,
    },
    {
      label: translation.translate('selectmodule'),
      accessor: 'mod',
      sortable: true,
    },
    {
      label: translation.translate('protocol_zeit'),
      accessor: 'datetimeStart',
      sortable: true,
    },
    {
      label: translation.translate('content-an'),
      accessor: 'img',
      sortable: false,
    },
    {
      label: translation.translate('reason'),
      accessor: 'id',
      sortable: false,
    },
  ];

  return (
    <>
      <div className="border-result">
        <h4>{translation.translate('listresult')}</h4>
        <div
          className="table_container table-res"
          style={{ minWidth: '1200px' }}
        ></div>

        <table className="table table-bordered table-res">
          <TableHead columns={columns} handleSorting={handleSorting} />
          <TableBody columns={columns} tableData={tableData} />
        </table>
      </div>
    </>
  );
};

export default Table;
