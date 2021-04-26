import React, {useState} from 'react';
import styles from './TableChart.module.css';

function TableChart({data}) {
  

  const columns = data[0] && Object.keys(data[0]);
  return (
    <div>
      <h3 className={styles.headerText}>Dashboard</h3>
      <table cellPadding={3} cellSpacing={12}>
        <thead>
          <tr>
            {data[0] && columns.map((heading, i) => <th key={i}>{heading}</th>)}
          </tr>
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
