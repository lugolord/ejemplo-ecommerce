import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

function NavBar () {
  return (
    <Navbar bg="dark" data-bs-theme="dark" sticky='top'>
      <Container>
        <Navbar.Brand as={Link} to='/'>miTiendita</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/category/computadoras'>computadoras</Nav.Link>
          <Nav.Link as={Link} to='/category/celulares'>celulares</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar
