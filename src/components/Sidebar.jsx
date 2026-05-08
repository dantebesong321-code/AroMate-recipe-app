import HomePage from "../pages/HomePage";
import RecipeList from "../pages/RecipeList";
import { Link } from "react-router-dom";
// import BookmarkPage from "../pages/BookmarkPage";

function Sidebar() {
  return (
    <div className="sidebar-content">
      <Link to="/">
        <div className="sibar-tabs">
          <img
            src="src/assets/icons/home_40dp_FFFFFF_FILL0_wght400_GRAD0_opsz40.png"
            width={"24px"}
            alt=""
          />
          Home
        </div>
      </Link>

      <Link to="/recipes">
        {" "}
        <div className="sibar-tabs">
          <img
            src="src/assets/icons/dashboard_40dp_FFFF_FILL0_wght400_GRAD0_opsz40.png"
            width={"24px"}
            alt=""
          />{" "}
          <div className="sibar-tabs">Dashboard </div>{" "}
        </div>
      </Link>

      <Link to="/recipes/create">
        {" "}
        <div className="sibar-tabs">
          <img
            src="src/assets/icons/add_box_40dp_FFFFFF_FILL0_wght400_GRAD0_opsz40.png"
            width={"24px"}
            alt=""
          />
          New recipe{" "}
        </div>
      </Link>

      <Link to="/bookmarks">
        {" "}
        <div className="sibar-tabs">
          <img
            src="src/assets/icons/bookmark_40dp_FFFFFF_FILL0_wght400_GRAD0_opsz40.png"
            width={"24px"}
            alt=""
          />
          Bookmarks{" "}
        </div>
      </Link>
    </div>
  );
}
export default Sidebar;
