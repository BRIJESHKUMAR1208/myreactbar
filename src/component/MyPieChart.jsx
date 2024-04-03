import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const MyPieChart = () => {
  const pieChartData = [
    { name: 'Red', value: 12 },
    { name: 'Blue', value: 19 },
    { name: 'Yellow', value: 3 },
    { name: 'Green', value: 5 },
    { name: 'Purple', value: 2 },
  ];

  // Define an array of colors to be used for the pie chart
  const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#2ECC71', '#9B59B6'];

  return (
    <div>
      <h2>Pie Chart Example</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={pieChartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label={({ percent }) => `${(percent * 100).toFixed(0)}%`} // Display percentage labels
        >
          {/* Map over the data and assign colors from the 'colors' array */}
          {pieChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip /> {/* Enable tooltip for additional information */}
      </PieChart>
    </div>
  );
};

export default MyPieChart;
