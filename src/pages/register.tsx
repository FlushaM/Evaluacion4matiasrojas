import RegisterForm from '@/componentes/RegisterForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Register() {
  return (
    <Container>
      {/* Navbar */}
      <Navbar bg="light" expand="lg" className="navbar-custom">
        <Navbar.Brand href="#home">Team Bukana</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Row>
        <Col md={2}>
          {/* Placeholder for left sidebar content */}
          <img src="/path/to/image1.jpg" alt="Sidebar Image 1" style={{ width: '100%', height: 'auto' }} />
        </Col>

        <Col md={8}>
          <RegisterForm />
        </Col>

        <Col md={2}>
          {/* Placeholder for right sidebar content */}
          <img src="/path/to/image2.jpg" alt="Sidebar Image 2" style={{ width: '100%', height: 'auto' }} />
        </Col>
      </Row>
    </Container>
  );
}

