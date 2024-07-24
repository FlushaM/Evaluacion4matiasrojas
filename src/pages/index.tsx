import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { Span } from 'next/dist/trace';

//Utilizo container para modifcar el display 
export default function LandingPage() {
  return (
    <Container >
      <Navbar bg="light" expand="lg" className="navbar-custom mb-custom p-3">
        <Navbar.Brand href="#home">Team Bukana</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/RegisterUser">Registro</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <header className="titulo-bukana mb-custom">
        <h1>Team Bukana</h1>
      </header>

      {/* Carousel */}
      <Row className="mb-custom">
        <Col md={12}>
          <Carousel >
            <Carousel.Item>
            <iframe width="100%" height="800px" src="https://www.youtube.com/embed/N2IJFzhW_Gc?si=GAEle9THBI5AHa-z" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              <Carousel.Caption>
                <h3>Rutas Mortales</h3>
                <p>Mtb en peru rutas incas.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="img-carrusel"
                src="img/bannercarrusel.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Maxxis</h3>
                <p>Neumaticos de calidad y que no te dejaran atras.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/atacamamtb.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Desierto de atacama</h3>
                <p>XraceDR realizada en el desierto de atacama.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      

      <Row className="mb-custom">
        <Col  md={{span:2 , offset:0}}   className="p-2 mb-custom">
          <div 
            className='interior-izquierda' 
            style={{ backgroundImage: `url('/src/img/Tom Pidcock.jfif')`, height: '100%', backgroundSize: 'cover', backgroundPosition: 'center',width: '100%'}}
          ></div>
        </Col>

        
        <Col md={8}>


          <Row className="mb-custom  p-0  tamaño"  >
            <Col md={4} className="mb-custom">
              <Card className='card-bicis'>
                <Card.Img variant="top" src='img/mtbfoto.jpg' className='imagen-bicis-card' />
                <Card.Body>
                  <Card.Title>MTB</Card.Title>
                  <Card.Text>Competiciones Mountain biking </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-custom">
              <Card className='card-bicis'>
                <Card.Img variant="top" src='img/foto1.jpg' className='imagen-bicis-card' />
                <Card.Body>
                  <Card.Title>XC</Card.Title>
                  <Card.Text>Competiciones Cross-country  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-custom">
              <Card className='card-bicis'>
                <Card.Img variant="top" src="img/dhfoto.jpg" className='imagen-bicis-card'/>
                <Card.Body>
                  <Card.Title>DH</Card.Title>
                  <Card.Text>Competiciones Downhill </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
          </Row>
        </Col>
      </Row>

      <>
        <div className='formulario-contacto'>
          <Row className="my-custom">
            <Col md={12}>
              <h2>Contacto</h2>
              <Form>
                <Form.Group controlId="formName" className="mb-custom">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Ingresa tu nombre" />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-custom">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Ingresa tu email" />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-custom">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Escribe tu mensaje" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Enviar
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </>

      <footer className="text-center my-custom">
        <p>&copy; 2024 Team Bukana. Todos los derechos reservados.</p>
      </footer>
    </Container>
  );
}
