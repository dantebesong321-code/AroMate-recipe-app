import HomePage from "../pages/HomePage";
import RecipeList from "../pages/RecipeList";
import Dashboard from "../pages/Dashboard";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar-content">
      <Link to="/">Home</Link>
      <Link to="/recipes">Dashboard</Link>
      <Link to="/recipes/create">New recipe</Link>
    </div>
  );
}
export default Sidebar;
