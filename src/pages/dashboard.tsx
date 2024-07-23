

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DashboardPage: React.FC = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2>Bienvenido al Dashboard</h2>
          {/* Aquí puedes agregar más contenido o componentes relacionados con el dashboard */}
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
