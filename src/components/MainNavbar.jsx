import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Sparkles } from "lucide-react";

function MainNavbar() {
  const location = useLocation();

  return (
    <nav className="nav-container">
      <Link to="/">
        {" "}
        <h2 className="brand-logo mb-0">AroMate</h2>
      </Link>

      <ul>
        <li>
          {" "}
          <Link to="/dashboard/aboutpage"> About</Link>
        </li>
        <li>
          <Link to="/dashboard/recipes"> My Cookbook</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavbar;
