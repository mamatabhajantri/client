import React from 'react';
import Sidebar from './Sidebar';
import SalesOrdersChart from './SalesOrdersChart';
import PieChart from './PieChart';
import Chart from './Chart';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
       <article className='dash'> <h2>Dashboard</h2></article>
        <div className="charts-container">
          <h3 className='title'>Sales Vs Order</h3>
          <div className="chart">
            <SalesOrdersChart />
          </div>
          <div className="chart">
            <Chart></Chart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;