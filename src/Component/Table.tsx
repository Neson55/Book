import { useTable } from 'react-table'
import type {TableOptions, Column } from 'react-table'
import { useMemo } from 'react'
 


  export const Table = () => {
   const data = useMemo(
     () => [
       {
         col1: 'Hello',
         col2: 'World',
         col3: 'foo',
       },
       {
         col1: 'react-table',
         col2: 'rocks',
         col3: 'foo',
       },
       {
         col1: 'whatever',
         col2: 'you want',
         col3: 'foo',
       },
     ],
     []
   )
 
   const columns: Column<{ col1: string; col2: string, col3: string }>[] = useMemo(
    () => [
      {
        Header: "id",
        accessor: "col1" // accessor is the "key" in the data
      },
      {
        Header: "Название",
        accessor: "col2"
      },
      {
        Header: "Автор(ы)",
        accessor: "col3"
      },

    ],
    []
  );

  const options: TableOptions<{ col1: string; col2: string; col3: string;}> = {
    data,
    columns
  };
   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
   } = useTable(options)
 
   return (
     <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
                 style={{
                   borderBottom: 'solid 3px red',
                   background: 'aliceblue',
                   color: 'black',
                   fontWeight: 'bold',
                   padding: '5px',
                   border: 'solid 1px gray',
                 }}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     style={{
                       padding: '10px',
                       border: 'solid 1px gray',
                       background: '',
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
   )
 }