import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Container, Navbar, Nav } from 'react-bootstrap';
import { obtenerUsuarios, modificarUsuario, eliminarUsuario } from './Firebase/Promesas';
import LoadingProgressBar from '../componentes/BarraProgreso';

const DatosUsuarios: React.FC = () => {
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUsuario, setSelectedUsuario] = useState<any | null>(null);

  useEffect(() => {
    const fetchUsuarios = async () => {
      setLoading(true);
      const data = await obtenerUsuarios();
      setUsuarios(data);
      setLoading(false);
    };
    fetchUsuarios();
  }, []);

  const handleEdit = (usuario: any) => {
    setSelectedUsuario(usuario);
    setShowModal(true);
  };

  const handleDelete = (usuario: any) => {
    setSelectedUsuario(usuario);
    setShowDeleteModal(true);
  };

  const handleSaveChanges = async () => {
    if (selectedUsuario) {
      await modificarUsuario(selectedUsuario);
      setShowModal(false);
      setSelectedUsuario(null);
      const data = await obtenerUsuarios();
      setUsuarios(data);
    }
  };

  const handleConfirmDelete = async () => {
    if (selectedUsuario && selectedUsuario.key) {
      await eliminarUsuario(selectedUsuario.key);
      setShowDeleteModal(false);
      setSelectedUsuario(null);
      const data = await obtenerUsuarios();
      setUsuarios(data);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (selectedUsuario) {
      setSelectedUsuario({
        ...selectedUsuario,
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
        <h2 className="text-center">Datos de Usuarios</h2>
        <LoadingProgressBar isLoading={loading} />
        <Table striped bordered hover className="mt-4 text-center datos-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.key}>
                <td>{usuario.nombre}</td>
                <td>{usuario.apellido}</td>
                <td>{usuario.email}</td>
                <td>
                  <Button variant="warning" className="mr-2" onClick={() => handleEdit(usuario)}>Modificar</Button>
                  <Button variant="danger" onClick={() => handleDelete(usuario)}>Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      {/* Modal para Modificar Usuario */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUsuario && (
            <Form>
              <Form.Group controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  value={selectedUsuario.nombre}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formApellido">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  name="apellido"
                  value={selectedUsuario.apellido}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={selectedUsuario.email}
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

      {/* Modal para Eliminar Usuario */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro que deseas eliminar a {selectedUsuario?.nombre} {selectedUsuario?.apellido}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Cancelar</Button>
          <Button variant="danger" onClick={handleConfirmDelete}>Eliminar</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default DatosUsuarios;
