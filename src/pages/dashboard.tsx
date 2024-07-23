import React from 'react';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Dashboard: React.FC = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <Container className="mt-5">
      {/* Banner */}
      <Row>
        <Col md={12}>
          <div style={{ backgroundColor: '#ddd', height: '100px', textAlign: 'center', padding: '20px' }}>
            <h2>Bienvenido al Dashboard</h2>
          </div>
        </Col>
      </Row>

      <Row className="mt-4">
        {/* Left Sidebar */}
        <Col md={2}>
          <div style={{ backgroundColor: '#eee', height: '400px' }}></div>
        </Col>

        {/* Main Content */}
        <Col md={8} className="text-center">
          <Button
            variant="primary"
            size="lg"
            className="mb-3"
            onClick={() => navigateTo('/register')}
          >
            Registrar Ciclista
          </Button>
          <br />
          <Button
            variant="secondary"
            size="lg"
            onClick={() => navigateTo('/datos-ciclistas')}
          >
            Ver Ciclistas
          </Button>
        </Col>

        {/* Right Sidebar */}
        <Col md={2}>
          <div style={{ backgroundColor: '#eee', height: '400px' }}></div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
