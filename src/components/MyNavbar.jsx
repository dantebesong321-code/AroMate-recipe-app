import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <div
      className="nav-bar"
      style={{
        backgroundColor: "white",
        height: "60px",
        position: "sticky",
        width: "auto",
      }}
    >
      <nav style={{ display: "flex", gap: "8px" }}>
        <Link to="/">
          <button>Home</button>
        </Link>

        <Link to="/recipes">
          <button>Recipes</button>
        </Link>

        <Link to="/recipes/create">
          <button className="main-cta">Create recipe</button>
        </Link>
      </nav>
    </div>
  );
}

export default MyNavbar;
