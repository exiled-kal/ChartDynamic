import React, {useEffect, useState} from 'react';
import {initialState} from '../context/GlobalState';
// import {TablePagination} from '@material-ui/core';

function TableChart() {
  const url =
    'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data1.json';

  const [data, setData] = useState([]);
  const [q, setQ] = useState('');

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  // const data = [
  //   {
  //     LotID: 'QPP_Test',
  //     ProductType: 'RB',
  //     StartDateTime: '31/03/2120 Time:09:24',
  //     SystemUpTime: 6,
  //     OperationTime: 0,
  //     DownTime: 0,
  //     IdleTime: 0,
  //     MTBF: 0,
  //     MTBA: 0,
  //     TotalQuantityIn: 0,
  //     TotalQuantityOut: 0,
  //     TotalPassed: 0,
  //     TotalFailed: 0,
  //     TotalYield: 0,
  //     SoftJam: 0,
  //     HardJam: 0,
  //     SprintUPH: 514,
  //   },
  //   {
  //     LotID: 'QPP_Test',
  //     ProductType: 'RB',
  //     StartDateTime: '31/03/2120 Time:13:56',
  //     SystemUpTime: 499,
  //     OperationTime: 129,
  //     DownTime: 0,
  //     IdleTime: 364,
  //     MTBF: 129,
  //     MTBA: 129,
  //     TotalQuantityIn: 33,
  //     TotalQuantityOut: 12,
  //     TotalPassed: 2,
  //     TotalFailed: 10,
  //     TotalYield: 16,
  //     SoftJam: 0,
  //     HardJam: 0,
  //     SprintUPH: 514,
  //   },
  //   {
  //     LotID: 'QPP_Test',
  //     ProductType: 'RB',
  //     StartDateTime: '31/03/2120 Time:14:10',
  //     SystemUpTime: 1481,
  //     OperationTime: 444,
  //     DownTime: 0,
  //     IdleTime: 1028,
  //     MTBF: 444,
  //     MTBA: 444,
  //     TotalQuantityIn: 33,
  //     TotalQuantityOut: 28,
  //     TotalPassed: 4,
  //     TotalFailed: 24,
  //     TotalYield: 14,
  //     SoftJam: 0,
  //     HardJam: 0,
  //     SprintUPH: 514,
  //   },
  //   {
  //     LotID: 'QPP_Test',
  //     ProductType: 'RB',
  //     StartDateTime: '31/03/2120 Time:14:25',
  //     SystemUpTime: 2680,
  //     OperationTime: 999,
  //     DownTime: 0,
  //     IdleTime: 1581,
  //     MTBF: 999,
  //     MTBA: 999,
  //     TotalQuantityIn: 33,
  //     TotalQuantityOut: 170,
  //     TotalPassed: 61,
  //     TotalFailed: 109,
  //     TotalYield: 35,
  //     SoftJam: 0,
  //     HardJam: 0,
  //     SprintUPH: 514,
  //   },
  //   {
  //     LotID: 'QPP_Test',
  //     ProductType: 'RB',
  //     StartDateTime: '31/03/2120 Time:09:24',
  //     SystemUpTime: 3,
  //     OperationTime: 4,
  //     DownTime: 7,
  //     IdleTime: 8,
  //     MTBF: 9,
  //     MTBA: 10,
  //     TotalQuantityIn: 1,
  //     TotalQuantityOut: 15,
  //     TotalPassed: 13,
  //     TotalFailed: 12,
  //     TotalYield: 19,
  //     SoftJam: 20,
  //     HardJam: 18,
  //     SprintUPH: 514,
  //   },
  //   {
  //     LotID: 'QPP_Test',
  //     ProductType: 'RB',
  //     StartDateTime: '31/03/2120 Time:09:24',
  //     SystemUpTime: 31,
  //     OperationTime: 20,
  //     DownTime: 15,
  //     IdleTime: 12,
  //     MTBF: 14,
  //     MTBA: 21,
  //     TotalQuantityIn: 22,
  //     TotalQuantityOut: 25,
  //     TotalPassed: 19,
  //     TotalFailed: 12,
  //     TotalYield: 18,
  //     SoftJam: 23,
  //     HardJam: 28,
  //     SprintUPH: 514,
  //   },
  // ];
  // const columns = [
  //   {
  //     title: 'Lot ID',
  //     field: 'LotID',
  //   },
  //   {
  //     title: 'Product Type',
  //     field: 'ProductType',
  //   },
  //   {
  //     title: 'Start Date Time',
  //     field: 'StartDateTime',
  //   },
  //   {
  //     title: 'System Up Time',
  //     field: 'SystemUpTime',
  //   },
  //   {
  //     title: 'Operation Time',
  //     field: 'OperationTime',
  //   },
  //   {
  //     title: 'Down Time',
  //     field: 'DownTime',
  //   },
  //   {
  //     title: 'Idle Time',
  //     field: 'IdleTime',
  //   },
  //   {
  //     title: 'MTBF',
  //     field: 'MTBF',
  //   },
  //   {
  //     title: 'MTBA',
  //     field: 'MTBA',
  //   },
  //   {
  //     title: 'Total Quantity In',
  //     field: 'TotalQuantityIn',
  //   },
  //   {
  //     title: 'Total Quantity Out',
  //     field: 'TotalQuantityOut',
  //   },
  //   {
  //     title: 'Total Passed',
  //     field: 'TotalPassed',
  //   },
  //   {
  //     title: 'Total Failed',
  //     field: 'TotalFailed',
  //   },
  //   {
  //     title: 'Total Yield',
  //     field: 'TotalYield',
  //   },
  //   {
  //     title: 'Soft Jam',
  //     field: 'SoftJam',
  //   },
  //   {
  //     title: 'Hard Jam',
  //     field: 'HardJam',
  //   },
  //   {
  //     title: 'Sprint UPH',
  //     field: 'SprintUPH',
  //   },
  // ];

  return (
    <div>
      <DataTable data={data} />
    </div>
  );
}

export default TableChart;
