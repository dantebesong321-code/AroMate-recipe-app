import HomePage from "../pages/HomePage";
import RecipeList from "../pages/RecipeList";
import Dashboard from "../pages/Dashboard";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar-content">
      <Link to="/">
        <a href="/">Home</a>
      </Link>
      <Link to="/recipes">
        <a href="/recipes">Dashboard</a>
      </Link>
      <Link to="/recipes/create">
        <a href="/recipes/create">New recipe</a>
      </Link>
    </div>
  );
}
export default Sidebar;
