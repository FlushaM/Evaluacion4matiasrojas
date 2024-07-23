// src/pages/login.tsx

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const docRef = doc(db, 'admin', 'admin'); // Asegúrate que el ID del documento es 'admin'
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const adminData = docSnap.data();
        if (adminData.username === username && adminData.password === password) {
          router.push('/dashboard');
        } else {
          alert('Usuario o contraseña incorrectos');
        }
      } else {
        alert('No se encontró el usuario admin');
      }
    } catch (error) {
      console.error("Error al obtener el documento:", error);
      alert('Error al intentar iniciar sesión');
    }
  };

  return (
    <Container className="mt-5">
      <h2>Login</h2>
      <Form onSubmit={handleLogin}>
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

        <Button variant="primary" type="submit">
          Iniciar sesión
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
