import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, Routes, Route } from 'react-router-dom';
import DonationList from './DonationList';
import { useAuth0 } from '@auth0/auth0-react';

const AdminPanel = () => {
  const { logout } = useAuth0();

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/admin/uncompleted">Admin Panel</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/admin/uncompleted">Uncompleted</Nav.Link>
              <Nav.Link as={Link} to="/admin/completed">Completed</Nav.Link>
              <Nav.Link as={Link} to="/admin/trash">Trash</Nav.Link>
            </Nav>
            <Button 
              onClick={() => logout({ returnTo: window.location.origin })}
              variant="danger"
              className="ms-auto"
            >
              Logout
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="mt-3">
        <Routes>
          <Route path="uncompleted" element={<DonationList type="uncompleted" />} />
          <Route path="completed" element={<DonationList type="completed" />} />
          <Route path="trash" element={<DonationList type="trash" />} />
        </Routes>
      </Container>
    </div>
  );
};

export default AdminPanel;



