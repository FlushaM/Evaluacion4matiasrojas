import React from 'react';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const Dashboard: React.FC = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <Container fluid className="dashboard-container">
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Team Bukana Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Banner */}
      <Row className="banner">
        <Col md={12} className="text-center">
          <h2>Bienvenido al Dashboard</h2>
        </Col>
      </Row>

      {/* Dark Section */}
      <Row className="dark-section">
        <Col md={12}></Col>
      </Row>

      {/* Main Content */}
      <Row className="main-content">
        <Col md={12} className="text-center">
          <Button
            variant="primary"
            size="lg"
            className="mb-3 action-button"
            onClick={() => navigateTo('/register')}
          >
            Registrar Ciclista
          </Button>
          <br />
          <Button
            variant="secondary"
            size="lg"
            className="action-button"
            onClick={() => navigateTo('/datos-cilcistas')}
          >
            Ver Ciclistas
          </Button>
        </Col>
      </Row>

      {/* Dark Section */}
      <Row className="dark-section">
        <Col md={12}></Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
