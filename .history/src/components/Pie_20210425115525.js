import React from 'react';
import {PieChart, Pie, Tooltip, Cell} from 'recharts';

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

const Pies = () => {
  return (
    <div>
      <h4>PieChart Of QPP</h4>
      <div className="pieChart__display">
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
            {data.map((data, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Pies;
