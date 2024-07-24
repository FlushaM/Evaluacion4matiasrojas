// src/componentes/RegisterForm.tsx
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { registrarCiclista } from '../pages/Firebase/Promesas';


const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    contraseña: '',
    fechaNacimiento: '',
    sexo: '',
    categoria: 'novicia',
    bicicleta: '',
    opinion: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await registrarCiclista(formData);
      alert('Ciclista registrado exitosamente');
      setFormData({
        nombre: '',
        apellido: '',
        contraseña: '',
        fechaNacimiento: '',
        sexo: '',
        categoria: 'novicia',
        bicicleta: '',
        opinion: ''
      });
    } catch (error) {
      console.error('Error al registrar ciclista:', error);
      alert('Error al registrar ciclista. Por favor, intenta de nuevo.');
    }
  };

  return (
    <Container className="form-container">
      <Row className="justify-content-md-center">
        <Col md={12}>
          <h2 className="form-title">Registro de Ciclistas</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formApellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formContraseña">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                name="contraseña"
                value={formData.contraseña}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formFechaNacimiento">
              <Form.Label>Fecha de Nacimiento</Form.Label>
              <Form.Control
                type="date"
                placeholder="Ingresa tu fecha de nacimiento"
                name="fechaNacimiento"
                value={formData.fechaNacimiento}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formSexo">
              <Form.Label>Sexo</Form.Label>
              <Form.Check
                type="radio"
                label="Masculino"
                name="sexo"
                value="masculino"
                checked={formData.sexo === 'masculino'}
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Femenino"
                name="sexo"
                value="femenino"
                checked={formData.sexo === 'femenino'}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formCategoria">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                as="select"
                name="categoria"
                value={formData.categoria}
                onChange={handleChange}
              >
                <option value="novicia">Novicia</option>
                <option value="amateur">Amateur</option>
                <option value="pro">Pro</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBicicleta">
              <Form.Label>Bicicleta</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu bicicleta"
                name="bicicleta"
                value={formData.bicicleta}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formOpinion">
              <Form.Label>Opinión</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Deje su opinión aquí"
                name="opinion"
                value={formData.opinion}
                onChange={handleChange}
              />
            </Form.Group>

            <Button type="submit" variant="primary" >
              Registrar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;
