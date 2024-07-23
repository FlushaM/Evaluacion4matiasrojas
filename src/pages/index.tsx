// src/pages/index.js

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function HomePage() {
  return (
    <Container>
      {/* Navbar */}
      <Navbar bg="light" expand="lg" className="navbar-custom">
        <Navbar.Brand href="#home" >Team Bukana</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="LoginPage">Login</Nav.Link>
            <Nav.Link href="#register">Registro</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Header */}
      <header className="titulo-bukana">
        <h1>Team Bukana</h1>
      </header>

      {/* Main Content */}
      <Row>
        {/* Left Sidebar */}
        <Col md={2}>
          {/* Placeholder for left sidebar content */}
        </Col>

        {/* Center Images */}
        <Col md={8}>
          <Row>
            <Col md={6}>
              {/* Placeholder for image 1 */}
              <div className='' style={{ backgroundColor: '#eee', height: '200px' }}></div>
            </Col>
            <Col md={6}>
              {/* Placeholder for image 2 */}
              <div style={{ backgroundColor: '#eee', height: '200px' }}></div>
            </Col>
          </Row>
        </Col>

        {/* Right Sidebar */}
        <Col md={2}>
          {/* Placeholder for right sidebar content */}
        </Col>
      </Row>

      {/* Contact Form */}
      <Row className="my-4">
        <Col md={12}>
          <h2>Contacto</h2>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu nombre" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu email" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Escribe tu mensaje" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>

        </Col>
      </Row>

      {/* Footer */}
      <footer className="text-center my-4">
        <p>&copy; 2024 Team Bukana. Todos los derechos reservados.</p>
      </footer>
    </Container>
  );
}

export default HomePage;
