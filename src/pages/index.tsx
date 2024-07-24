import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

export default function LandingPage() {
  return (
    <Container>
      <Navbar bg="light" expand="lg" className="navbar-custom">
        <Navbar.Brand href="#home">Team Bukana</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/login">Login</Nav.Link>
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
          <div 
            className='interior-izquierda' 
            style={{ backgroundImage: `url('/path/to/image1.jpg')`, height: '500px', backgroundSize: 'cover', backgroundPosition: 'center' }}
          ></div>
        </Col>

        {/* Center Images */}
        <Col md={8}>
          <Row>
            <Col md={6}>
              <div 
                style={{ backgroundImage: `url('/path/to/image2.jpg')`, backgroundColor: '#eee', height: '200px', backgroundSize: 'cover', backgroundPosition: 'center' }}
              ></div>
            </Col>
            <Col md={6}>
              <div 
                style={{ backgroundImage: `url('/path/to/image3.jpg')`, backgroundColor: '#eee', height: '200px', backgroundSize: 'cover', backgroundPosition: 'center' }}
              ></div>
              
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src='/img/mtbfoto.jpg'/>
                <Card.Body>
                  <Card.Title>MTB</Card.Title>
                  <Card.Text>Mountain biking competitions</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src='/img/foto1.jpg' />
                <Card.Body>
                  <Card.Title>XC</Card.Title>
                  <Card.Text>Cross-country competitions</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="/img/dhfoto.jpg"/>
                <Card.Body>
                  <Card.Title>DH</Card.Title>
                  <Card.Text>Downhill competitions</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        {/* Right Sidebar */}
        <Col md={2}>
          <div 
            className='interior-derecha' 
            style={{ backgroundImage: `url('src/img/TomPidcock.jfif')`, height: '500px', backgroundSize: 'cover', backgroundPosition: 'center' }}
          ></div>
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
