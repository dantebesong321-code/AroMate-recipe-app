import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

function BookmarkPage() {
  const [bookmarkedRecipes, setBookmarkedRecipes] = useState([]);

  useEffect(() => {
    const storedBookmarks =
      JSON.parse(localStorage.getItem("bookmarkedRecipes")) || [];

    setBookmarkedRecipes(storedBookmarks);
  }, []);

  const removeFromBookmarks = (recipeId) => {
    const updatedBookmarks = bookmarkedRecipes.filter(
      (recipe) => recipe.id !== recipeId,
    );

    setBookmarkedRecipes(updatedBookmarks);

    localStorage.setItem("bookmarkedRecipes", JSON.stringify(updatedBookmarks));
  };

  return (
    <div className="bookmar-list">
      <h2>My Bookmarked Recipes</h2> <br />
      <div className="recipe-cards">
        {bookmarkedRecipes.length === 0 ? (
          <p>No bookmarked recipes yet.</p>
        ) : (
          bookmarkedRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              removeFromBookmarks={removeFromBookmarks}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default BookmarkPage;
