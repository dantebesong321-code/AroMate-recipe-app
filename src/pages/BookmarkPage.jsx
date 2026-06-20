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
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-4">
      <h2 className="text-2xl font-bold mb-6">My Bookmarked Recipes</h2>

      {bookmarkedRecipes.length === 0 ? (
        <p className="text-gray-500 text-center">No bookmarked recipes yet.</p>
      ) : (
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {bookmarkedRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                removeFromBookmarks={removeFromBookmarks}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default BookmarkPage;
