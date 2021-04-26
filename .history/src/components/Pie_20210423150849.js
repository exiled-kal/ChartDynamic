import React from 'react';
import {PieChart, Pie, Tooltip, Cell} from 'recharts';

function Pie() {
  return (
    <div>
      <h4>PieChart Of QPP</h4>
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
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default Pie;
