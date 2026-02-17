import React from 'react'

export const TableComponent = (props) => {
   console.log("columns:", props.columns);
   console.log("data:", props.data);
   
  return (
    <div>
      <table className='table table-dark'>
         <thead>
            <tr>
               {
                  props.columns.map((value, index) => {
                     return <th key={index}>{value}</th>
                     })
               }
            </tr>
         </thead>
         <tbody>
            {
               props.data.map((d, dataIndex) => {
                  return <tr key={dataIndex}>
                     {
                        props.columns.map((v) => {
                           return <td>{d[v]}</td>
                        })
                     }
                  </tr>
               })
            }
         </tbody>
      </table>
    </div>
  )
}