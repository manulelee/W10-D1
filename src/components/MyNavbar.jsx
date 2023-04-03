import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="sticky-top">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            className="navLogo"
            src="https://www.brandforum.it/wp-content/uploads/2021/05/mondadori-marchio_-_Copia-scaled.jpg"
            alt="logo Mondadori"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#browse">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
