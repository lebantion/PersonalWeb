import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './assets/character.png';
import './NavBar.css';

function NavBar() {
  return (
    <>
        <Navbar bg="black" variant="dark">
            <Container>
                <Navbar.Brand href="">
                  <img alt="character" src={logo} width="30" height="30" className="d-inline-block align-top"/>{' '}
                       Simon Ha
                </Navbar.Brand>
                <Nav className="me-auto">'
                    <Nav.Link href="/About">About Me</Nav.Link>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Projects">Projects</Nav.Link>
                    <Nav.Link href="/Resume">Resume</Nav.Link>
                    <Nav.Link href="/Diploma">Diploma</Nav.Link>
                </Nav>
            </Container>
      </Navbar>
    </>
  );
}
export default NavBar;