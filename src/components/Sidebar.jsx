import HomePage from "../pages/HomePage";
import RecipeList from "../Pages/RecipeList";
import Dashboard from "../Pages/Dashboard";

function Sidebar() {
  return (
    <div className="side-bar">
      <Link>
        <HomePage />
      </Link>
      <Link>
        <Dashboard />
      </Link>

      <Link to="/recipes">
        <button className="main-cta">Get Started</button>
      </Link>
    </div>
  );
}
export default Sidebar;
