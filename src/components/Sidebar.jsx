import HomePage from "../flows/HomePage";
import RecipeList from "../flows/RecipeList";
import Dashboard from "../flows/Dashboard";

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
