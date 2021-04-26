import React, {useState} from 'react';
import Bars from './Bars';
import styles from './TableChart.module.css';

function TableChart({data}) {
  // const [finalData, setFinalData] = useState([]);

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
        <tbody >
          {data.map((row) => (
            <tr>
              {columns.map((column) => (
                <td>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-1">
          <div className="card shadow mb-xl-2 mb-lg-2 mg-md-2 mb-sm-2 mb-2">
            <h4>Bar Chart</h4>
            <Bars />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-1">
          <div className="card shadow mb-xl-2 mb-lg-2 mg-md-2 mb-sm-2 mb-2">
            <h4>Line Chart</h4>
            {/* <LineChartScreen/> */}
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-1">
          <div className="card shadow mb-xl-2 mb-lg-2 mg-md-2 mb-sm-2 mb-2">
            <h4>Pie Chart</h4>
            {/* <PieChartScreen/> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableChart;
