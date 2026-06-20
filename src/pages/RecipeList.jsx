import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { PlusCircle, UtensilsCrossed, ChefHat } from "lucide-react";

import Spinner from "react-bootstrap/Spinner";

import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";

function RecipeList() {
  const [allRecipes, setAllRecipes] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const getData = async () => {
    try {
      setError(false);

      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/recipes`,
      );

      setAllRecipes(response.data);
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredRecipes = allRecipes?.filter((recipe) => {
    const matchesCategory =
      selectedCategory === "all" || recipe.tags?.includes(selectedCategory);

    const matchesSearch = recipe.title
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  /* LOADING */

  if (!allRecipes && !error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <Spinner animation="border" className="text-green-600 w-12 h-12" />

        <p className="mt-4 text-slate-500">
          Preparing your culinary collection...
        </p>
      </div>
    );
  }

  /* ERROR */

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        <h2 className="text-2xl font-bold text-slate-900">
          Oops! Kitchen's closed.
        </h2>

        <p className="text-slate-500 mt-2">We couldn't load the recipes.</p>

        <div
          onClick={getData}
          className="
            mt-6
            bg-slate-500
            hover:bg-slate-800
            text-white
            px-6
            py-3
            rounded-xl
            transition
          "
        >
          Try Again
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <ChefHat className="text-green-600" />

            <span className="text-sm font-medium text-green-600">
              My Cookbook
            </span>
          </div>

          <h1 className="text-4xl font-bold text-slate-900">Your Recipes</h1>

          <p className="mt-2 text-slate-500">
            Discover, organize and manage your favorite meals.
          </p>
        </div>
      </div>

      {/* SEARCH */}

      <div className="bg-white border border-slate-200 rounded-2xl p-4">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>

      {/* STATS */}

      <div className="flex flex-wrap items-center gap-3">
        <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
          {allRecipes.length} Recipes
        </div>

        <div className="bg-slate-100 text-slate-600 px-4 py-2 rounded-full text-sm">
          {filteredRecipes.length} Showing
        </div>
      </div>

      {/* FILTERS */}

      <div className="flex flex-wrap gap-3">
        {["all", "breakfast", "lunch", "dinner"].map((category) => (
          <div
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`
                px-5 py-2 rounded-full text-sm font-medium transition

                ${
                  selectedCategory === category
                    ? "bg-green-600 text-white"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-green-400"
                }
              `}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </div>
        ))}
      </div>

      {/* RECIPES */}

      {filteredRecipes?.length > 0 ? (
        <div
          className="
            grid
            gap-6
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe._id || recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div
          className="
            bg-white
            border
            border-slate-200
            rounded-3xl
            py-20
            px-6
            text-center
          "
        >
          <UtensilsCrossed
            size={56}
            strokeWidth={1}
            className="mx-auto text-slate-400"
          />

          <h3 className="mt-4 text-xl font-semibold text-slate-900">
            No recipes found
          </h3>

          <p className="mt-2 text-slate-500">
            Try adjusting your search or create a new recipe.
          </p>

          <Link to="/dashboard/recipes/create">
            <button
              className="
                mt-6
                bg-green-600
                hover:bg-green-700
                text-white
                px-5
                py-3
                rounded-xl
                transition
              "
            >
              Create Recipe
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default RecipeList;
