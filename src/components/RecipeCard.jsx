import { Link } from "react-router-dom";
import { useState } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { MdStar } from "react-icons/md";

function RecipeCard({ recipe }) {
  const getBookmarks = () =>
    JSON.parse(localStorage.getItem("bookmarkedRecipes")) || [];

  const [isBookmarked, setIsBookmarked] = useState(() =>
    getBookmarks().some((r) => r.id === recipe.id),
  );

  const toggleBookmark = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const current = getBookmarks();

    if (isBookmarked) {
      const updated = current.filter((r) => r.id !== recipe.id);
      localStorage.setItem("bookmarkedRecipes", JSON.stringify(updated));
    } else {
      localStorage.setItem(
        "bookmarkedRecipes",
        JSON.stringify([...current, recipe]),
      );
    }

    setIsBookmarked((prev) => !prev);
  };

  const averageRating = recipe.reviews?.length
    ? (
        recipe.reviews.reduce((acc, review) => acc + Number(review.rating), 0) /
        recipe.reviews.length
      ).toFixed(1)
    : "0";

  return (
    <Link to={`/dashboard/recipes/${recipe.id}`} className="group block">
      <div className="bg-white border-0 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        {/* IMAGE */}
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          {/* bookmark */}
          <div
            onClick={toggleBookmark}
            className="absolute top-3 right-3 bg-white/60 hover:bg-white p-2 rounded-full shadow-md transition"
          >
            {isBookmarked ? (
              <BsBookmarkFill className="text-green-600" />
            ) : (
              <BsBookmark className="text-gray-500" />
            )}
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-bold text-slate-800 line-clamp-1">
            {recipe.title}
          </h3>

          <p className="text-sm text-slate-500 line-clamp-2">
            {recipe.description}
          </p>

          {/* rating */}
          <div className="flex items-center gap-2 text-sm">
            <MdStar className="text-yellow-400" size={18} />
            <span className="font-semibold text-slate-700">
              {averageRating}
            </span>
            <span className="text-slate-400">
              ({recipe.reviews?.length || 0})
            </span>
          </div>

          {/* tags preview */}
          <div className="flex flex-wrap gap-2 pt-1">
            {recipe.tags?.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-2">
            <span className="inline-block w-full text-center bg-gray-900 text-white text-sm py-2 rounded-xl group-hover:bg-green-600 transition">
              See recipe
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;
