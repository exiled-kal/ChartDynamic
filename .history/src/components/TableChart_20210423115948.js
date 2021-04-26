import React, {useEffect, useState} from 'react';

function TableChart({data}) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <table cellPadding={} cellSpacing={12}>
      <thead>
        <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
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
  );
}

export default TableChart;
