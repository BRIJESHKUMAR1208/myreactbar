import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarChartComponent = () => {
    const [data, setChartData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
               // const response = await fetch('https://localhost:7057/api/My/Getsales');
                const response = await fetch('https://api.fake-rest.refine.dev/users');
                
                const data = await response.json();
                setChartData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Bar Chart Example</h2>
            <BarChart width={600} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default BarChartComponent;
