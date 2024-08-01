import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
// import './PieChart.css';

const data = [
  { name: 'WooCommerce Store', value: 1483 },
  { name: 'Shopify Store', value: 1176 },
];

const COLORS = ['#FF6384', '#36A2EB'];

const CustomPieChart = () => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default CustomPieChart;