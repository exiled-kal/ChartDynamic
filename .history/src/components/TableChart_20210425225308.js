import React, {useState} from 'react';
import BarCharts from './BarCharts';

function TableChart({data}) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <div>
      <table cellPadding={3} cellSpacing={12}>
        <thead>
          <tr>{data[0] && columns.map((heading, i) => <th>{heading}</th>)}</tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr>
              {columns.map((column) => (
                <td>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default TableChart;
