import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import { MdStar } from "react-icons/md";

import {
  Clock,
  ChefHat,
  ArrowLeft,
  Edit3,
  Trash2,
  MessageSquare,
} from "lucide-react";

import StarRate from "../components/StarRate";

function RecipeDetail() {
  const [recipe, setRecipe] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [editingIndex, setEditingIndex] = useState(null);

  const { recipeId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [recipeId]);

  const getData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/recipes/${recipeId}`,
      );
      setRecipe(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const averageRating =
    recipe?.reviews?.length > 0
      ? (
          recipe.reviews.reduce((acc, r) => acc + Number(r.rating), 0) /
          recipe.reviews.length
        ).toFixed(1)
      : 0;

  const handleReviewSubmit = async () => {
    if (!reviewText || !rating) return;

    const newReview = {
      user: "Anonymous Cook",
      rating: String(rating),
      comment: reviewText,
    };

    const updatedReviews =
      editingIndex !== null
        ? recipe.reviews.map((r, i) => (i === editingIndex ? newReview : r))
        : [...(recipe.reviews || []), newReview];

    const updatedRecipe = {
      ...recipe,
      reviews: updatedReviews,
    };

    try {
      await axios.put(
        `${import.meta.env.VITE_SERVER_URL}/recipes/${recipeId}`,
        updatedRecipe,
      );

      setRecipe(updatedRecipe);
      setReviewText("");
      setRating(0);
      setEditingIndex(null);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteReview = async (index) => {
    const updatedReviews = recipe.reviews.filter((_, i) => i !== index);

    const updatedRecipe = {
      ...recipe,
      reviews: updatedReviews,
    };

    await axios.put(
      `${import.meta.env.VITE_SERVER_URL}/recipes/${recipeId}`,
      updatedRecipe,
    );

    setRecipe(updatedRecipe);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/recipes/${recipeId}`,
      );
      navigate("/dashboard/recipes");
    } catch (err) {
      console.log(err);
    }
  };

  if (!recipe) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <Spinner animation="border" />
        <p className="mt-4 text-slate-500">
          Getting the secret ingredients ready...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-slate-600 hover:text-slate-900"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      {/* HERO */}
      <div className="relative rounded-3xl overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-[380px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-8 text-white">
          <h1 className="text-4xl font-bold mb-3">{recipe.title}</h1>

          <div className="flex flex-wrap gap-3 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded-full">
              ⏱ {recipe.cookingTime} min
            </span>

            <span className="bg-white/20 px-3 py-1 rounded-full">
              👨‍🍳 {recipe.difficulty}
            </span>

            <span className="bg-white/20 px-3 py-1 rounded-full">
              ⭐ {averageRating}
            </span>
          </div>
        </div>
      </div>

      {/* TAGS */}
      <div className="flex flex-wrap gap-2">
        {recipe.tags?.map((tag) => (
          <span
            key={tag}
            className="bg-green-50 text-green-700 px-4 py-1 rounded-full text-sm"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* GRID */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* ABOUT */}
        <div className="bg-white border rounded-3xl p-6">
          <h3 className="text-xl font-bold mb-3">About</h3>
          <p className="text-slate-600">{recipe.description}</p>
        </div>

        {/* INGREDIENTS */}
        <div className="bg-white border rounded-3xl p-6">
          <h3 className="text-xl font-bold mb-4">Ingredients</h3>

          <ul className="space-y-3">
            {recipe.ingredients?.map((i, idx) => (
              <li key={idx} className="flex gap-2 text-slate-700">
                <span className="text-green-600">✓</span>
                {i}
              </li>
            ))}
          </ul>
        </div>

        {/* STEPS */}
        <div className="lg:col-span-2 bg-white border rounded-3xl p-6">
          <h3 className="text-xl font-bold mb-4">Steps</h3>

          <div className="space-y-4">
            {recipe.steps?.map((step, i) => (
              <div key={i} className="flex gap-3">
                <div className="h-7 w-7 rounded-full bg-green-600 text-white flex items-center justify-center text-sm">
                  {i + 1}
                </div>
                <p className="text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* REVIEWS */}
      <div className="bg-white border rounded-3xl p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <MessageSquare size={20} />
            Reviews
          </h3>

          <span className="text-sm bg-slate-100 px-3 py-1 rounded-full">
            {recipe.reviews?.length || 0} reviews
          </span>
        </div>

        {/* ADD REVIEW */}
        <div className="space-y-3">
          <StarRate rating={rating} setRating={setRating} />

          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Write your review..."
            className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-green-200"
          />

          <button
            onClick={handleReviewSubmit}
            className="bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700"
          >
            {editingIndex !== null ? "Update Review" : "Submit Review"}
          </button>
        </div>

        {/* REVIEW LIST */}
        <div className="space-y-4">
          {recipe.reviews?.map((review, index) => (
            <div key={index} className="border rounded-2xl p-4">
              <div className="flex justify-between">
                <div>
                  <h4 className="font-semibold">{review.user}</h4>

                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <MdStar
                        key={i}
                        size={18}
                        color={
                          i < Number(review.rating) ? "#facc15" : "#cbd5e1"
                        }
                      />
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 text-sm">
                  <button
                    onClick={() => {
                      setReviewText(review.comment);
                      setRating(Number(review.rating));
                      setEditingIndex(index);
                    }}
                    className="text-green-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteReview(index)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </div>
              </div>

              <p className="mt-2 text-slate-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex gap-4">
        <Link to={`/dashboard/recipes/edit/${recipeId}`}>
          <div className="bg-slate-900 text-white px-6 py-3 rounded-xl flex items-center gap-2">
            <Edit3 size={16} />
            Edit
          </div>
        </Link>

        <div
          onClick={() => setShowConfirm(true)}
          className="border-1 border-red-500 text-red-600 hover:bg-red-200  pointer px-6 py-3 rounded-xl flex items-center gap-2"
        >
          <Trash2 size={16} />
          Delete
        </div>
      </div>

      {/* MODAL */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-2xl w-[90%] max-w-md">
            <h3 className="text-lg font-bold">Delete recipe?</h3>
            <p className="text-slate-600 mt-2">This action cannot be undone.</p>

            <div className="flex justify-end gap-3 mt-5">
              <div onClick={() => setShowConfirm(false)} className="px-4 py-2">
                Cancel
              </div>

              <div
                onClick={confirmDelete}
                className="border-red-500 text-red-500 px-4 py-2 rounded-xl"
              >
                Delete
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeDetail;
