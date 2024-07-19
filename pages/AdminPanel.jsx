// import React from 'react';
// import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
// import { Link, Routes, Route } from 'react-router-dom';
// import DonationList from '../components/Donation/DonationList';
// import { useAuth0 } from '@auth0/auth0-react';

// const AdminPanel = () => {
//   const { user, logout } = useAuth0();

//   return (
//     <Container fluid>
//       <Row>
//         <Col md={2} className="sidebar">
//           <Nav className="flex-column">
//             <Nav.Link as={Link} to="/admin/uncompleted">Uncompleted</Nav.Link>
//             <Nav.Link as={Link} to="/admin/completed">Completed</Nav.Link>
//             <Nav.Link as={Link} to="/admin/trash">Trash</Nav.Link>
//             <Button 
//               onClick={() => logout({ returnTo: window.location.origin })}
//               variant="danger"
//               className="mt-3"
//             >
//               Logout
//             </Button>
//           </Nav>
//         </Col>
//         <Col md={10} className="content">
//           <Routes>
//             <Route path="uncompleted" element={<DonationList type="uncompleted" />} />
//             <Route path="completed" element={<DonationList type="completed" />} />
//             <Route path="trash" element={<DonationList type="trash" />} />
//           </Routes>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AdminPanel;


import React from 'react';
import { Container, Navbar, Nav, Button, Row, Col } from 'react-bootstrap';
import { Link, Routes, Route } from 'react-router-dom';
import DonationList from '../components/Donation/DonationList';
import { useAuth0 } from '@auth0/auth0-react';

const AdminPanel = () => {
  const { user, logout } = useAuth0();

  return (
    <Container fluid>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Row className="w-100">
            <Col xs={3} className="d-flex align-items-center">
              <Navbar.Brand>Admin Panel</Navbar.Brand>
            </Col>
            <Col xs={6} className="d-flex justify-content-center">
              <Nav className="mx-auto">
                <Nav.Link as={Link} to="/admin/uncompleted">Uncompleted</Nav.Link>
                <Nav.Link as={Link} to="/admin/completed">Completed</Nav.Link>
                <Nav.Link as={Link} to="/admin/trash">Trash</Nav.Link>
              </Nav>
            </Col>
            <Col xs={3} className="d-flex justify-content-end">
              <Button 
                onClick={() => logout({ returnTo: window.location.origin })}
                variant="danger"
              >
                Logout
              </Button>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <Routes>
        <Route path="uncompleted" element={<DonationList type="uncompleted" />} />
        <Route path="completed" element={<DonationList type="completed" />} />
        <Route path="trash" element={<DonationList type="trash" />} />
      </Routes>
    </Container>
  );
};

export default AdminPanel;


