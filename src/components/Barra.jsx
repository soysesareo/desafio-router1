import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineHome } from 'react-icons/ai';
import { MdContactPage } from 'react-icons/md';
import { HiOutlineCake } from 'react-icons/hi';

import { NavLink } from 'react-router-dom';

import React from 'react'

const Barra = () => {
  return (
    <div>
      <Navbar bg="danger" variant="dark">
        <Container>
          <AiOutlineHome size={35} />
          <NavLink className="nav-link" to="/">Home</NavLink>
          <MdContactPage size={35} />
          <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Navbar.Brand>Happy Cake</Navbar.Brand>
              <HiOutlineCake size={40} />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Barra