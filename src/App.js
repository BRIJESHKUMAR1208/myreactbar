import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/component/Header';
import Sidebar from '../src/component/Sidebar';
import { Container, Row, Col } from 'react-bootstrap';
import BarChartComponent from '../src/component/barChartData';
import MyPieChart from '../src/component/MyPieChart';

function App() {
  const pieChartData = [
    { name: 'Red', value: 12 },
    { name: 'Blue', value: 19 },
    { name: 'Yellow', value: 3 },
    { name: 'Green', value: 5 },
    { name: 'Purple', value: 2 },
  ];

  return (
   
      <Container fluid>
        <Row>
          <Col md={2}>
            <Sidebar />
          </Col>
          <Col md={10}>
            <div className="App">
              <Header />
              <Router>
              <Routes>
              <Route path="/" element={<><h2>Welcome to World</h2></>}>
                  {/* <BarChartComponent /> */}
                  {/* <MyPieChart  /> */}

                </Route>
                <Route path="/bar" element={<><BarChartComponent/></>}>
                  {/* <BarChartComponent /> */}
                  {/* <MyPieChart  /> */}

                </Route>
                <Route path="/pie" element={<><MyPieChart/></>}>
                 
                </Route>
              </Routes>
              </Router>
            </div>
          </Col>
        </Row>
      </Container>
   
  );
}

export default App;
