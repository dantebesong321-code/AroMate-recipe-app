import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function MyNavbar() {
  return (
    <div
      className="nav-bar"
      style={{
        height: "60px",
        position: "sticky",
        display: "flex",
      }}
    >
      <div>
        <SearchBar />
      </div>

      <nav style={{ display: "flex", gap: "8px" }}>
        <Link to="/recipes/create">
          <button className="main-cta">Create recipe</button>
        </Link>
      </nav>
    </div>
  );
}

export default MyNavbar;
