import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { PlusCircle, UtensilsCrossed } from "lucide-react";
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

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);

    if (category === "all") {
      setFilteredRecipes(allRecipes);
      return;
    }

    const filtered = allRecipes.filter((recipe) =>
      recipe.tags?.includes(category),
    );

    setFilteredRecipes(filtered);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!allRecipes && !error) {
    return (
      <div className="loader-container">
        <Spinner animation="border" className="animated-spinner" />
        <p className="loading-text">Preparing your culinary collection...</p>
      </div>
    );
  }

  const filteredRecipes = allRecipes?.filter((recipe) => {
    const matchesCategory =
      selectedCategory === "all" || recipe.tags?.includes(selectedCategory);

    const matchesSearch = recipe.title
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  if (error) {
    return (
      <div className="loader-container">
        <h3>Oops! Kitchen's closed.</h3>
        <p>We couldn't load the recipes. Please check your connection.</p>
        <button onClick={getData} className="main-cta standard-margin-top">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="recipe-page-container">
      <header className="recipe-list-header">
        <div className="header-text">
          <h2>Your Recipes</h2>
          <p>Explore your personal collection and saved favorites.</p>
        </div>

        <div className="header-actions">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <Link to="/dashboard/recipes/create" className="cta-link-wrapper">
            <button className="main-cta-btn">
              <PlusCircle size={18} />
              <span>New Recipe</span>
            </button>
          </Link>
        </div>
      </header>

      <hr className="header-divider" />

      <div className="recipe-categories">
        {["all", "breakfast", "lunch", "dinner"].map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <main className="recipe-list-content">
        {filteredRecipes?.length > 0 ? (
          <div className="recipe-cards">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe._id || recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="empty-results">
            <UtensilsCrossed size={48} strokeWidth={1} />
            <h4>No recipes found</h4>
            <p>Try adjusting your search or add a new recipe to your book.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default RecipeList;
