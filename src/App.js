import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import BarChartComponent from '../src/component/barChartData';
import pieChartData from '../src/component/pieChartData';
import MyPieChart from '../src/component/MyPieChart';
import { BarChart, PieChart, Cell } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/component/Header';
import Sidebar from '../src/component/Sidebar';
import { Container, Row, Col } from 'react-bootstrap';


function App() {

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

    <Container fluid>
    <Row>
      <Col md={2}>
        <Sidebar />
      </Col>
      <Col md={10}>
    <div className="App">
      <Header/>
     <MyPieChart/>
     <BarChartComponent/>
    </div>
    </Col>
      </Row>
    </Container>
  );
}

export default App;
