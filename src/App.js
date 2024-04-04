import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BarChartComponent from '../src/component/barChartData';
import MyPieChart from '../src/component/MyPieChart';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/component/Header';
import Sidebar from '../src/component/Sidebar';
import { Container, Row, Col } from 'react-bootstrap';
import AboutUs from './component/aboutus'; // Import the AboutUs component

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
    <Router>
      <Container fluid>
        <Row>
          <Col md={2}>
            <Sidebar />
          </Col>
          <Col md={10}>
            <div className="App">
              <Header />
              <Routes>
                <Route path="/" element={<><MyPieChart /><BarChartComponent /></>} />
                <Route path="/aboutus" element={<AboutUs />} />
              </Routes>
            </div>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
