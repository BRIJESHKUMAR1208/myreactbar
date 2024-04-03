import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const  pieChartData = {
    
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#2ECC71', '#9B59B6'],
      },
    ],
  };

  export default pieChartData;