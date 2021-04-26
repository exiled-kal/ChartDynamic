import React, {useState} from 'react';
import Bars from './Bars';

function TableChart({data}) {
  const [finalData, setFinalData] = useState([]);

  const columns = data[0] && Object.keys(data[0]);
  return (
    <>
      <table key={data._id} cellPadding={3} cellSpacing={12}>
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
    </>
  );
}

export default TableChart;
