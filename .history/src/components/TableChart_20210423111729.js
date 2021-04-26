import React, {useState} from 'react';
import MaterialTable from 'material-table';

function TableChart() {
  const data = [
    {
      LotID: 'QPP_Test',
      ProductType: 'RB',
      StartDateTime: '31/03/2120 Time:09:24',
      SystemUpTime: 6,
      OperationTime: 0,
      DownTime: 0,
      IdleTime: 0,
      MTBF: 0,
      MTBA: 0,
      TotalQuantityIn: 0,
      TotalQuantityOut: 0,
      TotalPassed: 0,
      TotalFailed: 0,
      TotalYield: 0,
      SoftJam: 0,
      HardJam: 0,
      SprintUPH: 514,
    },
    {
      LotID: 'QPP_Test',
      ProductType: 'RB',
      StartDateTime: '31/03/2120 Time:13:56',
      SystemUpTime: 499,
      OperationTime: 129,
      DownTime: 0,
      IdleTime: 364,
      MTBF: 129,
      MTBA: 129,
      TotalQuantityIn: 33,
      TotalQuantityOut: 12,
      TotalPassed: 2,
      TotalFailed: 10,
      TotalYield: 16,
      SoftJam: 0,
      HardJam: 0,
      SprintUPH: 514,
    },
    {
      LotID: 'QPP_Test',
      ProductType: 'RB',
      StartDateTime: '31/03/2120 Time:14:10',
      SystemUpTime: 1481,
      OperationTime: 444,
      DownTime: 0,
      IdleTime: 1028,
      MTBF: 444,
      MTBA: 444,
      TotalQuantityIn: 33,
      TotalQuantityOut: 28,
      TotalPassed: 4,
      TotalFailed: 24,
      TotalYield: 14,
      SoftJam: 0,
      HardJam: 0,
      SprintUPH: 514,
    },
    {
      LotID: 'QPP_Test',
      ProductType: 'RB',
      StartDateTime: '31/03/2120 Time:14:25',
      SystemUpTime: 2680,
      OperationTime: 999,
      DownTime: 0,
      IdleTime: 1581,
      MTBF: 999,
      MTBA: 999,
      TotalQuantityIn: 33,
      TotalQuantityOut: 170,
      TotalPassed: 61,
      TotalFailed: 109,
      TotalYield: 35,
      SoftJam: 0,
      HardJam: 0,
      SprintUPH: 514,
    },
    {
      LotID: 'QPP_Test',
      ProductType: 'RB',
      StartDateTime: '31/03/2120 Time:09:24',
      SystemUpTime: 3,
      OperationTime: 4,
      DownTime: 7,
      IdleTime: 8,
      MTBF: 9,
      MTBA: 10,
      TotalQuantityIn: 1,
      TotalQuantityOut: 15,
      TotalPassed: 13,
      TotalFailed: 12,
      TotalYield: 19,
      SoftJam: 20,
      HardJam: 18,
      SprintUPH: 514,
    },
    {
      LotID: 'QPP_Test',
      ProductType: 'RB',
      StartDateTime: '31/03/2120 Time:09:24',
      SystemUpTime: 31,
      OperationTime: 20,
      DownTime: 15,
      IdleTime: 12,
      MTBF: 14,
      MTBA: 21,
      TotalQuantityIn: 22,
      TotalQuantityOut: 25,
      TotalPassed: 19,
      TotalFailed: 12,
      TotalYield: 18,
      SoftJam: 23,
      HardJam: 28,
      SprintUPH: 514,
    },
  ];
  const columns = [
    {
    title:"LotID",field:"LotID"
  },
    {
    title:"ProductType",field:"ProductType"
  },
    {
    title:"StartDateTime",field:"StartDateTime"
  },
    {
    title:"SystemUpTime",field:"SystemUpTime"
  },
    {
    title:"OperationTime",field:"OperationTime"
  },
    {
    title:"DownTime",field:"DownTime"
  },
    {
    title:"IdleTime",field:"IdleTime"
  },
    {
    title:"MTBF",field:"MTBF"
  },
    {
    title:"MTBA",field:"MTBA"
  },
    {
    title:"TotalQuantityIn",field:"TotalQuantityIn"
  },
    {
    title:"TotalQuantityOut",field:"TotalQuantityOut"
  },
    {
    title:"TotalPassed",field:"TotalPassed"
  },
    {
    title:"TotalFailed",field:"TotalFailed"
  },
    {
    title:"TotalYield",field:"TotalYield"
  },
    {
    title:"SoftJam",field:""
  },
    {
    title:"",field:""
  },
]

  return (
    <div>
      <MaterialTable title="Material Table" data={data} columns={data} />
    </div>
  );
}

export default TableChart;
