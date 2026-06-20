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
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <h2>My Bookmarked Recipes</h2> <br />
      <div className="flex gap-6">
        <div className="grid gab-6 sm:grid-cols-2 xl:grid-cols-3">
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
    </div>
  );
}

export default BookmarkPage;
