import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  FaHome,
  FaBookOpen,
  FaPlusCircle,
  FaInfoCircle,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import { MdRestaurantMenu } from "react-icons/md";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      title: "Home",
      path: "/",
      icon: <FaHome size={20} />,
    },
    {
      title: "My Cookbook",
      path: "/dashboard/recipes",
      icon: <FaBookOpen size={20} />,
    },
    {
      title: "Create Recipe",
      path: "/dashboard/recipes/create",
      icon: <FaPlusCircle size={20} />,
    },
    {
      title: "Favorites",
      path: "/dashboard/bookmarks",
      icon: <FaHeart size={20} />,
    },
    {
      title: "About",
      path: "/dashboard/aboutpage",
      icon: <FaInfoCircle size={20} />,
    },
  ];

  return (
    <aside
      className={`sidebar
        h-screen
        sticky
        top-0
        bg-white
        border-r
        border-slate-200
        transition-all
        duration-300
        flex
        flex-col
        ${isCollapsed ? "w-20" : "w-60"}
      `}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between p-5 border-b border-slate-100">
        <div className="flex items-center gap-3 overflow-hidden">
          {!isCollapsed && (
            <div>
              <h2 className="font-bold text-xl text-slate-900">AroMate</h2>
              <p className="text-xs text-slate-500">Your Cooking Companion</p>
            </div>
          )}
        </div>

        <div
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="
            p-2
            rounded-lg
            hover:bg-slate-100
            transition
          "
        >
          {isCollapsed ? (
            <FaChevronRight size={14} />
          ) : (
            <FaChevronLeft size={14} />
          )}
        </div>
      </div>

      {/* MENU */}
      <nav className="flex-1 px-3 py-6">
        {!isCollapsed && (
          <p className="px-3 mb-3 text-xs font-semibold tracking-wider uppercase text-slate-400">
            Navigation
          </p>
        )}

        <div className="space-y-2">
          {menuItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link key={item.path} to={item.path}>
                <div
                  className={`
                    flex
                    items-center
                    gap-4
                    px-4
                    py-3
                    rounded-xl
                    transition-all
                    duration-200
                    group

                    ${
                      active
                        ? "bg-green-50 text-green-700 font-medium"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }
                  `}
                >
                  <span
                    className={`
                      ${active ? "text-green-600" : "text-slate-500"}
                    `}
                  >
                    {item.icon}
                  </span>

                  {!isCollapsed && <span>{item.title}</span>}
                </div>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* FOOTER */}
      <div className="border-t border-slate-100 p-4">
        {!isCollapsed ? (
          <div className="bg-slate-50 rounded-2xl p-4">
            <h4 className="font-semibold text-slate-900 mb-1">Happy Cooking</h4>

            <p className="text-sm text-slate-500">
              Discover, create and organize your favorite recipes.
            </p>
          </div>
        ) : (
          <div className="flex justify-center text-xl">🍳</div>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
