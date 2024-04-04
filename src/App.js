import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/component/Header';
import Sidebar from '../src/component/Sidebar';
import MyPieChart from '../src/component/MyPieChart';
import BarChartComponent from '../src/component/barChartData';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
   
    <Router>
      <Container fluid>
        <Row>
          {/* <Col md={2}>
            <Sidebar />
          </Col> */}
          <Col md={12}>
          <div className="App">
              <Header />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
           
              <Routes>
                <Route path="/piechart" element={<MyPieChart />} />
                <Route path="/bar-chart" element={<BarChartComponent />} />
              </Routes>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Router>
  
  );
}

export default App;
