import React, {useState} from 'react';
import Bars from './Bars';

function TableChart({data}) {
  const [finalData, setFinalData] = useState([]);

  const columns = data[i] && Object.keys(data[i]);
  return (
    <>
      <table cellPadding={3} cellSpacing={12}>
        <thead>
          <tr>{data[i] && columns.map((heading) => <th>{heading}</th>)}</tr>
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
    </>
  );
}

export default TableChart;