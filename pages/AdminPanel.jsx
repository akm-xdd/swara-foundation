import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import DonationList from '../components/Donation/DonationList';

const AdminPanel = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2} className="bg-light sidebar">
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/admin/uncompleted">Uncompleted</Nav.Link>
            <Nav.Link as={Link} to="/admin/completed">Completed</Nav.Link>
          </Nav>
        </Col>
        <Col md={10} className="content">
          <Routes>
            <Route path="uncompleted" element={<DonationList type="uncompleted" />} />
            <Route path="completed" element={<DonationList type="completed" />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPanel;
