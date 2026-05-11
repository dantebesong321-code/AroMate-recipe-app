import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import AboutPage from "../pages/AboutPage";
import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <Navbar>
      <Container className="nav-container">
        <Navbar.Text>
          <Link to="/dashboard/aboutpage">About</Link>
        </Navbar.Text>
        <Navbar.Brand href="/">
          <h2>AroMate</h2>
        </Navbar.Brand>
        <button>have fun</button>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
