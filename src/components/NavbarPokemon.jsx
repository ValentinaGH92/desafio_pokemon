import { Link } from "react-router-dom";
import logo from "../img/icons8-pokemon-50.png";
import { Navbar, Nav, Image } from "react-bootstrap";

const NavbarPokemon = () => {
  return (
    <Navbar bg="body-tertiary">
      <Navbar.Brand href="#" style={{ paddingLeft: "20px" }}>
        <Image src={logo} />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link as={Link} to="/" className="text-dark">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/pokemon" className="text-dark">
            Pokemon
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarPokemon;
