import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <div
      className="nav-bar"
      style={{
        backgroundColor: "white",
        height: "60px",
        position: "sticky",
        padding: "",
      }}
    >
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>

        <Link to="/recipes">
          <button>Recipes</button>
        </Link>

        <Link to="/pages/CreateRecipe">
          <button>Create recipe</button>
        </Link>
      </nav>
    </div>
  );
}

export default MyNavbar;
