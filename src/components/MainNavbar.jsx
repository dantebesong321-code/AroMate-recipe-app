import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  BookOpen,
  PlusCircle,
} from "lucide-react";

function MainNavbar() {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [recipesOpen, setRecipesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2 text-green-600 no-underline"
          >
            <span className="text-2xl font-bold">AroMate</span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`font-medium transition ${
                location.pathname === "/"
                  ? "text-green-600"
                  : "text-white hover:text-green-600"
              }`}
            >
              Home
            </Link>

            <Link
              to="/dashboard/aboutpage"
              className={`font-medium transition ${
                location.pathname === "/dashboard/aboutpage"
                  ? "text-green-600"
                  : "text-white hover:text-green-600"
              }`}
            >
              About
            </Link>

            {/* DROPDOWN */}
            <div className="relative">
              <div
                onClick={() => setRecipesOpen(!recipesOpen)}
                className="flex items-center gap-1 font-medium text-white hover:text-green-600"
              >
                Recipes
                <ChevronDown size={18} />
              </div>

              {recipesOpen && (
                <div className="absolute top-10 left-0 right-2 w-56 bg-white rounded-md shadow-lg border border-slate-100 py-2">
                  <Link
                    to="/dashboard/recipes"
                    className="flex items-center gap-2 px-4 py-3 hover:bg-slate-50 text-slate-700"
                    onClick={() => setRecipesOpen(false)}
                  >
                    <BookOpen size={18} />
                    My Cookbook
                  </Link>

                  <Link
                    to="/dashboard/recipes/create"
                    className="flex items-center gap-2 px-4 py-3 hover:bg-slate-50 text-slate-700"
                    onClick={() => setRecipesOpen(false)}
                  >
                    <PlusCircle size={18} />
                    Create Recipe
                  </Link>
                </div>
              )}
            </div>

            <Link to="/dashboard/recipes/create">
              <div className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl transition">
                Add Recipe
              </div>
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <div
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="md:hidden pb-5">
            <div className="flex flex-col gap-2 bg-white rounded-2xl shadow-md p-4">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="py-2 text-slate-700"
              >
                Home
              </Link>

              <Link
                to="/dashboard/aboutpage"
                onClick={() => setMobileOpen(false)}
                className="py-2 text-slate-700"
              >
                About
              </Link>

              <Link
                to="/dashboard/recipes"
                onClick={() => setMobileOpen(false)}
                className="py-2 text-slate-700"
              >
                My Cookbook
              </Link>

              <Link
                to="/dashboard/recipes/create"
                onClick={() => setMobileOpen(false)}
                className="py-2 text-slate-700"
              >
                Create Recipe
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default MainNavbar;
