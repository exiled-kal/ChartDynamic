import React, {useState} from 'react';
import Bars from './Bars';

function TableChart({data}) {
  const [finalData, setFinalData] = useState([]);

  const columns = data[0] && Object.keys(data[0]);
  return (
    <div>
      <table cellPadding={3} cellSpacing={12}>
        <thead>
          <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={id}>
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
