import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import './SalesOrdersChart.css';

const data = [
  { name: '6/30/2024 - 7/6/2024', orders: 4, sales: 1404 },
  { name: '7/7/2024 - 7/13/2024', orders: 2, sales: 700 },
  { name: '7/14/2024 - 7/20/2024', orders: 2, sales: 700 },
  { name: '7/21/2024 - 7/27/2024', orders: 1, sales: 351 },
];

const SalesOrdersChart = () => {
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="orders" stroke="#FF7F50" />
      <Line type="monotone" dataKey="sales" stroke="#00BFFF" />
    </LineChart>
  );
};

export default SalesOrdersChart;