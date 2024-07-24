import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getAdminUser } from './Firebase/Promesas';
import Image from 'next/image';

//utilizamos la biblioteca router de next para el enrutamiento de las paginas del codigo 
const LoginPage: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const adminData = await getAdminUser();
      if (adminData && adminData.username === username && adminData.password === password) {
        router.push('/dashboard');
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error("Error al intentar iniciar sesión:", error);
      alert('Error al intentar iniciar sesión');
    }
  };

  return (
    <Container className="login-container mt-5">
      <Row>
        <Col md={6} className="d-flex align-items-center">
          <div className="w-100">
            <h2 className="text-center mb-4">Login</h2>
            <Form onSubmit={handleLogin} className="login-form">
              <Form.Group controlId="formUsername">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu nombre de usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mt-3">
                Iniciar sesión
              </Button>
            </Form>
          </div>
        </Col>
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <Image src="/img/foto1.jpg" alt="Logo" width={300} height={300} />
        </Col>
      </Row>
      <footer className="text-center mt-4">
        <p>&copy; 2024 Bukana. Todos los derechos reservados.</p>
      </footer>
    </Container>
  );
};

export default LoginPage;
