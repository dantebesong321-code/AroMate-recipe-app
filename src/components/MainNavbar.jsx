import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function MainNavBar() {
  return (
    <Navbar>
      <Container className="nav-container">
        <Navbar.Brand href="/">
          <h2>AroMate</h2>
        </Navbar.Brand>
        <Navbar.Text>
          Signed in as: <a href="#login">Jane Doe</a>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default MainNavBar;
