import React from 'react';
import {PieChart, Pie, Tooltip, Cell, LineChart} from 'recharts';
const data = [
  {
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
];

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#ff0000',
  '#FF8050',
  '#FF8123',
  '#FF1986',
];

const pieChart = 
data.length
? (
  <PieChart width={800} height={500}>
          <Pie
            dataKey="MTBF"
            isAnimationActive={true}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label={true}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
): null
const barChart = confirmed ? (
  <BarChart
          width={900}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: 30,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="StartDateTime"
            scale="point"
            padding={{left: 10, right: 10}}
          />

          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="MTBF" fill="#8884d8" background={{fill: '#eee'}} />
        </BarChart>
)
:

const Pies = () => {
  return (
    <div>
      <h4>PieChart Of QPP</h4>
      <div className="pieChart__display">
        {data ? barChart : pieChart}
      </div>
    </div>
  );
};

export default Pies;
