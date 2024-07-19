import React from 'react';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import { Link, Routes, Route } from 'react-router-dom';
import DonationList from '../components/Donation/DonationList';
import { useAuth0 } from '@auth0/auth0-react';

const AdminPanel = () => {
  const { user, logout } = useAuth0();

  return (
    <Container fluid>
      <Row>
        <Col md={2} className="sidebar">
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/admin/uncompleted">Uncompleted</Nav.Link>
            <Nav.Link as={Link} to="/admin/completed">Completed</Nav.Link>
            <Button 
              onClick={() => logout({ returnTo: window.location.origin })}
              variant="danger"
              className="mt-3"
            >
              Logout
            </Button>
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
