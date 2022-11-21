import moment from 'moment';
import { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination';

const TableBody = ({ tableData, columns }) => {
  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);

  // No of Records to be displayed on each page
  const [recordPerPage, setRecordsPerPage] = useState(5);

  const indexOfLastRecord = currentPage * recordPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordPerPage;
  const currentPosts = tableData.slice(indexOfFirstRecord, indexOfLastRecord);
  // const nPages = Math.ceil(tableData.length / recordsPerPage);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <tbody>
        {currentPosts.map((data) => {
          return (
            <tr key={data.id}>
              {columns.map(({ accessor }) => {
                const tData = data[accessor] ? data[accessor] : ' ';
                if (accessor === 'img') {
                  return (
                    <td style={{ width: '25%' }}>
                      <img
                        src={`${
                          tData.includes('data:image/')
                            ? tData
                            : 'data:image/jpeg;base64,' + tData
                        }`}
                        style={{ height: '200px' }}
                      />
                    </td>
                  );
                } else if (accessor === 'datetimeStart') {
                  return <td>{moment(tData).format('YYYY-MM-DD HH:mm')}</td>;
                }

                return <td key={accessor}>{tData}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      {tableData?.length > 0 && (
        <Pagination
          tableData={tableData.length}
          recordPerPage={recordPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};

export default TableBody;
