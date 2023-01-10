import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './assets/character.png';
import './NavBar.css';
import resume from './assets/resume.pdf';

function NavBar() {
  return (
    <header>
        <Navbar bg="black" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                  <img alt="character" src={logo} width="30" height="30" className="d-inline-block align-top"/>{' '}
                       NOWIS_
                </Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/Projects">Projects</Nav.Link>
                  <Nav.Link href="/Diploma">Diploma</Nav.Link>
                  <Nav.Link href="/Contact">Contact Me</Nav.Link>
                </Nav>
                <a href={resume} target="_blank">Resume</a>
            </Container>
      </Navbar>
    </header>
  );
}
export default NavBar;
