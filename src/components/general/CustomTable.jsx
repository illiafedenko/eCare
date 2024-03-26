import React, { useMemo } from 'react';
import { useTable, useSortBy, useRowSelect } from 'react-table';
import cg1_image from '../../assets/images/caregiver4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faEdit, faSort, faTrash } from '@fortawesome/free-solid-svg-icons';

const data = [
  { id: 1, name: 'John Doe', age: 27, email: "johndoe@gmail.com", role: "caregiver", createdDate: "2022-03-24" },
  { id: 2, name: 'Jane Doe', age: 28, email: "johndoe@gmail.com", role: "caregiver", createdDate: "2024-03-25" },
  { id: 3, name: 'John Doe', age: 25, email: "johndoe@gmail.com", role: "doctor", createdDate: "2024-03-22" },
  { id: 4, name: 'John Doe', age: 22, email: "johndoe@gmail.com", role: "nurse", createdDate: "2024-03-26" },
  { id: 5, name: 'Jane Doe', age: 35, email: "johndoe@gmail.com", role: "professor", createdDate: "2021-03-21" },
  { id: 6, name: 'John Doe', age: 30, email: "johndoe@gmail.com", role: "caregiver", createdDate: "2022-03-24" },
  { id: 7, name: 'John Doe', age: 40, email: "johndoe@gmail.com", role: "doctor", createdDate: "2024-03-24" },
  { id: 8, name: 'Jane Doe', age: 39, email: "johndoe@gmail.com", role: "nurse", createdDate: "2024-03-22" },
  { id: 9, name: 'John Doe', age: 41, email: "johndoe@gmail.com", role: "professor", createdDate: "2023-03-23" },
  { id: 10, name: 'John Doe', age: 43, email: "johndoe@gmail.com", role: "caregiver", createdDate: "2014-03-23" },
  { id: 11, name: 'Jane Doe', age: 33, email: "johndoe@gmail.com", role: "doctor", createdDate: "2021-03-22" },
  { id: 12, name: 'John Doe', age: 31, email: "johndoe@gmail.com", role: "nurse", createdDate: "2020-03-24" },
  { id: 13, name: 'John Doe', age: 30, email: "johndoe@gmail.com", role: "caregiver", createdDate: "2024-03-06" },
  { id: 14, name: 'Jane Doe', age: 29, email: "johndoe@gmail.com", role: "nurse", createdDate: "2022-03-21" },
  { id: 15, name: 'John Doe', age: 28, email: "johndoe@gmail.com", role: "caregiver", createdDate: "2014-03-22" },
  { id: 16, name: 'Jane Doe', age: 32, email: "johndoe@gmail.com", role: "professor", createdDate: "2004-03-24" },
  // Add more data objects as needed
];

// Define columns for the table
const columns = [
  { Header: 'ID', accessor: 'id' },
  {
    Header: 'Name', accessor: 'name',
    Cell: ({ row }) => (
      <div className=" flex flex-row items-center gap-x-3 justify-center">
        <img className='  w-6 h-6 rounded-full object-cover' src={cg1_image} alt="Avatar" />
        {row.original.name}
      </div>
    ),
  },
  { Header: 'Age', accessor: 'age' },
  { Header: 'Emaile', accessor: 'email' },
  { Header: 'Role', accessor: 'role' },
  { Header: 'Created Date', accessor: 'createdDate' },
  {
    Header: 'Actions',
    disableSortBy: true, // Make this column unsortable
    Cell: () => (
      <div className=" flex flex-row justify-center gap-x-3">
        <FontAwesomeIcon icon={faEdit} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    ),
  },
  // Add more columns as needed
];

export default function CustomTable() {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <input type="checkbox" {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => (
            <input type="checkbox" {...row.getToggleRowSelectedProps()} />
          ),
        },
        ...columns,
      ]);
    }
  );

  // Memoize the table instance for performance optimization
  const memoizedTable = useMemo(() => {
    return (
      <table {...getTableProps()} className="table w-full">
        <thead className=' text-[12px] font-poppins text-gray-500'>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className=' border-b-[1px] h-[40px]'>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? 'sorted-desc'
                        : 'sorted-asc'
                      : ''
                  }
                >
                  <div className=' flex flex-row justify-center items-center gap-x-3'>
                    {column.render('Header')}
                    {column.render('Header') != "Actions" ? <FontAwesomeIcon icon={faSort} /> : undefined}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className=' text-[12px] font-poppins'>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className=' h-[40px] border-b border-[1px] border-gray-100'>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }, [getTableProps, getTableBodyProps, headerGroups, rows, prepareRow]);

  return (
    <div className=' w-full h-full  border-[2px] border-gray-200 rounded-[20px]'>
      {memoizedTable}
      {/* <div>
        Selected Rows:{' '}
        {selectedFlatRows.map(row => row.original.name).join(', ')}
      </div> */}
    </div>
  );
}
