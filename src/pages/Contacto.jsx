import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contacto = () => {
  return (
    <div>
      <h1>Cuéntanos, ¿en qué te podemos ayudar?</h1>
      <br />
      <Form className="container">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control type="email" placeholder="nombre@ejemplo.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Descripción</Form.Label>
          <Form.Control type="text" placeholder="Indique su requerimiento" />
        </Form.Group>

        <Button variant="danger" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  )
}

export default Contacto