import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { registrarPersona } from '@/Firebase/Promesas';
import { Persona } from  '@/pages/Interfaces/interfaces';

const RegisterCyclist: React.FC = () => {
  const [persona, setPersona] = useState<Persona>({
    nombre: '',
    apellido: '',
    rut: '',
    fechaNacimiento: '',
    correo: '',
    edad: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersona({ ...persona, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await registrarPersona(persona);
    // Redireccionar o mostrar mensaje de éxito
  };

  return (
    <Container>
      <h2>Registrar Ciclista</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" name="nombre" value={persona.nombre} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formApellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" name="apellido" value={persona.apellido} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formRut">
          <Form.Label>RUT</Form.Label>
          <Form.Control type="text" name="rut" value={persona.rut} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formFechaNacimiento">
          <Form.Label>Fecha de Nacimiento</Form.Label>
          <Form.Control type="date" name="fechaNacimiento" value={persona.fechaNacimiento} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formCorreo">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" name="correo" value={persona.correo} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formEdad">
          <Form.Label>Edad</Form.Label>
          <Form.Control type="number" name="edad" value={persona.edad} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Registrar
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterCyclist;
