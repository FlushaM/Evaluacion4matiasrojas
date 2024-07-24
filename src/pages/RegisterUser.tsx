// src/pages/register.tsx
import RegisterUserForm from '@/componentes/RegisterUserForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Register() {
  return (
    <Container>
      <Navbar bg="light" expand="lg" className="navbar-custom">
        <Navbar.Brand href="/">Team Bukana</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/dashboard">Menu</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Row className="mt-5">
        <Col md={4}>
          <img src="/img/foto1.jpg" alt="Sidebar Image 1" className="sidebar-image" />
        </Col>
        
        <Col md={8}>
          <RegisterUserForm />
        </Col>
      </Row>
    </Container>
  );
}
