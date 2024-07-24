import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Container, Navbar, Nav } from 'react-bootstrap';
import { obtenerCiclistas, modificarCiclista, eliminarCiclista } from './Firebase/Promesas';
import { Ciclista } from '@/pages/Interfaces/interfaces';

import LoadingProgressBar from '../componentes/BarraProgreso';

const DatosCiclistas: React.FC = () => {
  const [ciclistas, setCiclistas] = useState<Ciclista[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCiclista, setSelectedCiclista] = useState<Ciclista | null>(null);

  useEffect(() => {
    const fetchCiclistas = async () => {
      setLoading(true);
      const data = await obtenerCiclistas();
      setCiclistas(data);
      setLoading(false);
    };
    fetchCiclistas();
  }, []);

  const handleEdit = (ciclista: Ciclista) => {
    setSelectedCiclista(ciclista);
    setShowModal(true);
  };

  const handleDelete = (ciclista: Ciclista) => {
    setSelectedCiclista(ciclista);
    setShowDeleteModal(true);
  };

  const handleSaveChanges = async () => {
    if (selectedCiclista) {
      await modificarCiclista(selectedCiclista);
      setShowModal(false);
      setSelectedCiclista(null);
      const data = await obtenerCiclistas();
      setCiclistas(data);
    }
  };

  const handleConfirmDelete = async () => {
    if (selectedCiclista && selectedCiclista.key) {
      await eliminarCiclista(selectedCiclista.key);
      setShowDeleteModal(false);
      setSelectedCiclista(null);
      const data = await obtenerCiclistas();
      setCiclistas(data);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (selectedCiclista) {
      setSelectedCiclista({
        ...selectedCiclista,
        [name]: value
      });
    }
  };

  return (
    <Container fluid className="datos-container">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Team Bukana Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/dashboard">Menu</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="mt-5 datos-content">
        <h2 className="text-center">Datos de Ciclistas</h2>
        <LoadingProgressBar isLoading={loading} />
        <Table striped bordered hover className="mt-4 text-center datos-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Contraseña</th>
              <th>Fecha de Nacimiento</th>
              <th>Sexo</th>
              <th>Categoría</th>
              <th>Bicicleta</th>
              <th>Opinión</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {ciclistas.map((ciclista) => (
              <tr key={ciclista.key}>
                <td>{ciclista.nombre}</td>
                <td>{ciclista.apellido}</td>
                <td>{ciclista.contraseña}</td>
                <td>{ciclista.fechaNacimiento}</td>
                <td>{ciclista.sexo}</td>
                <td>{ciclista.categoria}</td>
                <td>{ciclista.bicicleta}</td>
                <td>{ciclista.opinion}</td>
                <td>
                  <Button variant="warning" className="mr-2" onClick={() => handleEdit(ciclista)}>Modificar</Button>
                  <Button variant="danger" onClick={() => handleDelete(ciclista)}>Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      {/* Modal para Modificar Ciclista */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar Ciclista</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCiclista && (
            <Form>
              <Form.Group controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  value={selectedCiclista.nombre}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formApellido">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  name="apellido"
                  value={selectedCiclista.apellido}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formContraseña">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="text"
                  name="contraseña"
                  value={selectedCiclista.contraseña}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formFechaNacimiento">
                <Form.Label>Fecha de Nacimiento</Form.Label>
                <Form.Control
                  type="date"
                  name="fechaNacimiento"
                  value={selectedCiclista.fechaNacimiento}
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
                  checked={selectedCiclista.sexo === 'masculino'}
                  onChange={handleChange}
                />
                <Form.Check
                  type="radio"
                  label="Femenino"
                  name="sexo"
                  value="femenino"
                  checked={selectedCiclista.sexo === 'femenino'}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formCategoria">
                <Form.Label>Categoría</Form.Label>
                <Form.Control
                  as="select"
                  name="categoria"
                  value={selectedCiclista.categoria}
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
                  name="bicicleta"
                  value={selectedCiclista.bicicleta}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formOpinion">
                <Form.Label>Opinión</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="opinion"
                  value={selectedCiclista.opinion}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancelar</Button>
          <Button variant="primary" onClick={handleSaveChanges}>Guardar Cambios</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal para Eliminar Ciclista */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar Ciclista</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro que deseas eliminar a {selectedCiclista?.nombre} {selectedCiclista?.apellido}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Cancelar</Button>
          <Button variant="danger" onClick={handleConfirmDelete}>Eliminar</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default DatosCiclistas;
