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
    </div>
  );
}

export default MyNavbar;
