import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const BarChartComponent = () => {
    const data = [
        { name: 'January', sales: 100 },
        { name: 'February', sales: 120 },
        { name: 'March', sales: 150 },
        { name: 'April', sales: 180 },
        { name: 'May', sales: 200 },
      ];
    return (
<div>
        <h2>Bar Chart Example</h2>
      <BarChart width={600} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#8884d8" />
      </BarChart>
      </div>
    );
  };
  
  export default BarChartComponent;