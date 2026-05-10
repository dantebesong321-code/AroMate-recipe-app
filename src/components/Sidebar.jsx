import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsBookmarkDash } from "react-icons/bs";
import { CgAddR } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
import { RiHome2Line } from "react-icons/ri";
import HomePage from "../pages/HomePage";
import RecipeList from "../pages/RecipeList";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar-content">
      <Link to="/">
        <div className="sibar-tabs">
          <RiHome2Line size={"24px"} />
          Home
        </div>
      </Link>
      <Link to="/dashboard">
        {" "}
        <div className="sibar-tabs">
          <RxDashboard size={"24px"} />
          <div className="sibar-tabs">Dashboard </div>{" "}
        </div>
      </Link>
      <Link to="/dashboard/recipes/create">
        {" "}
        <div className="sibar-tabs">
          <CgAddR size={"24px"} />
          New recipe{" "}
        </div>
      </Link>
      <Link to="/dashboard/bookmarks">
        {" "}
        <div className="sibar-tabs">
          <BsBookmarkDash size={"24px"} />
          Bookmarks{" "}
        </div>
      </Link>{" "}
      <br /> <br />
      <Link to="/dashboard/aboutpage">
        {" "}
        <div className="sibar-tabs">
          <AiOutlineInfoCircle size={"24px"} />
          About{" "}
        </div>
      </Link>
    </div>
  );
}
export default Sidebar;
