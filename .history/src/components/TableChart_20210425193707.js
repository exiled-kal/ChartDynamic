import React, {useState} from 'react';

function TableChart({data}) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <div>
      <table cellPadding={3} cellSpacing={12}>
        <thead>
          <tr>
            {data[0] && columns.map((heading, i) => <th>{heading}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={i}>
              {columns.map((column,i) => (
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
