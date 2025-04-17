import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/component/Header';
import Sidebar from '../src/component/Sidebar';
import SliderComponent from '../src/component/SliderComponent';
import AboutUs from '../src/component/aboutus';
import MyPieChart from '../src/component/MyPieChart';
import BarChartComponent from '../src/component/barChartData';
import { Container, Row, Col } from 'react-bootstrap';
import GetData from './component/GetData';
import PetForm from './component/PetForm';
import Example from './component/Example';
import ItemList from './component/ItemList';

function App() {

  
  return (
   <>


    
    <Router>
      <Container fluid>
        <Row>
          {/* <Col md={2}>
            <Sidebar />
          </Col> */}
          <Col md={12}>
          <div className="App">
              <Header />
              <Routes>
              <Route path="/" element={<SliderComponent />} />
              </Routes>
          
             
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
           
              <Routes>
               
                <Route path="/piechart" element={<MyPieChart />} />
                <Route path="/bar-chart" element={<BarChartComponent />} />
                <Route path="/get" element={<GetData />} />
                <Route path="/postpet" element={<PetForm />} />
                <Route path="/task" element={<Example />} />
               <Route path="/aboutus" elsement={<AboutUs/>}/>
              </Routes>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Router>
    </>
  );
}

export default App;
