import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  LayoutDashboard,
  PlusCircle,
  Bookmark,
  Info,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <aside className={`side-bar ${isCollapsed ? "collapsed" : ""}`}>
      <button
        className="sidebar-toggle-btn"
        onClick={toggleSidebar}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
      </button>

      <nav className="sidebar-content">
        <Link to="/" title="Home">
          <div className={`sibar-tabs ${isActive("/")}`}>
            <Home size={22} strokeWidth={2} />
            {!isCollapsed && <span className="sidebar-text">Home</span>}
          </div>
        </Link>

        <Link to="/dashboard" title="Dashboard">
          <div className={`sibar-tabs ${isActive("/dashboard")}`}>
            <LayoutDashboard size={22} strokeWidth={2} />
            {!isCollapsed && <span className="sidebar-text">Dashboard</span>}
          </div>
        </Link>

        <Link to="/dashboard/recipes/create" title="New Recipe">
          <div
            className={`sibar-tabs ${isActive("/dashboard/recipes/create")}`}
          >
            <PlusCircle size={22} strokeWidth={2} />
            {!isCollapsed && <span className="sidebar-text">New Recipe</span>}
          </div>
        </Link>

        <Link to="/dashboard/bookmarks" title="Bookmarks">
          <div className={`sibar-tabs ${isActive("/dashboard/bookmarks")}`}>
            <Bookmark size={22} strokeWidth={2} />
            {!isCollapsed && <span className="sidebar-text">Bookmarks</span>}
          </div>
        </Link>

        {/* UTILITY FOOTER ELEMENT */}
        <div className="sidebar-divider" />

        <Link to="/dashboard/aboutpage" title="About">
          <div className={`sibar-tabs ${isActive("/dashboard/aboutpage")}`}>
            <Info size={22} strokeWidth={2} />
            {!isCollapsed && <span className="sidebar-text">About</span>}
          </div>
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
