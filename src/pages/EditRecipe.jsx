import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditRecipe() {
  const navigate = useNavigate();
  const { recipeId } = useParams();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [steps, setSteps] = useState("");
  const [ingredients, setIngredients] = useState("");

  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/recipes/${recipeId}`,
      );

      const recipe = response.data;

      setTitle(recipe.title || "");
      setImage(recipe.image || "");
      setDescription(recipe.description || "");
      setDifficulty(recipe.difficulty || "");
      setCookingTime(recipe.cookingTime || "");
      setSteps(
        Array.isArray(recipe.steps)
          ? recipe.steps.join("\n")
          : recipe.steps || "",
      );
      setIngredients(
        Array.isArray(recipe.ingredients)
          ? recipe.ingredients.join("\n")
          : recipe.ingredients || "",
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      title,
      image,
      description,
      difficulty,
      cookingTime,
      steps: steps
        .split("\n")
        .map((step) => step.trim())
        .filter(Boolean),

      ingredients: ingredients
        .split("\n")
        .map((ingredient) => ingredient.trim())
        .filter(Boolean),
    };

    try {
      await axios.put(
        `${import.meta.env.VITE_SERVER_URL}/recipes/${recipeId}`,
        body,
      );

      navigate("/dashboard/recipes");
    } catch (error) {
      console.log(error);
    }
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/recipes/${recipeId}`,
      );

      navigate("/dashboard/recipes");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-slate-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* HEADER */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900">Edit Recipe</h1>

            <p className="mt-2 text-slate-600">
              Update your recipe details and keep your cookbook organized.
            </p>
          </div>

          {/* FORM CARD */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">
            <form onSubmit={handleSubmit}>
              {/* TITLE */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Recipe Title
                </label>

                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Creamy Garlic Pasta"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-green-100 focus:border-green-500"
                />
              </div>

              {/* IMAGE URL */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Image URL
                </label>

                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="https://..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-green-100 focus:border-green-500"
                />
              </div>

              {/* IMAGE PREVIEW */}
              {image && (
                <div className="mb-6">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-72 object-cover rounded-2xl border border-slate-200"
                  />
                </div>
              )}

              {/* DESCRIPTION */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Description
                </label>

                <textarea
                  rows="4"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-green-100 focus:border-green-500"
                />
              </div>

              {/* DIFFICULTY + COOKING TIME */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Difficulty
                  </label>

                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-green-100 focus:border-green-500"
                  >
                    <option value="">Select Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Cooking Time (minutes)
                  </label>

                  <input
                    type="number"
                    value={cookingTime}
                    onChange={(e) => setCookingTime(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-green-100 focus:border-green-500"
                  />
                </div>
              </div>

              {/* INGREDIENTS */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Ingredients
                </label>

                <textarea
                  rows="8"
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                  placeholder="One ingredient per line..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-green-100 focus:border-green-500"
                />
              </div>

              {/* STEPS */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Cooking Steps
                </label>

                <textarea
                  rows="8"
                  value={steps}
                  onChange={(e) => setSteps(e.target.value)}
                  placeholder="Describe each cooking step..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-green-100 focus:border-green-500"
                />
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row justify-end gap-4">
                <div
                  type="button"
                  onClick={() => setShowConfirm(true)}
                  className="px-6 py-3 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 transition"
                >
                  Delete Recipe
                </div>

                <div
                  type="submit"
                  className="px-8 py-3 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition"
                >
                  Save Changes
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* DELETE MODAL */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-md rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Delete Recipe?
            </h3>

            <p className="text-slate-600 mb-6">This action cannot be undone.</p>

            <div className="flex justify-end gap-3">
              <div
                onClick={() => setShowConfirm(false)}
                className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100"
              >
                Cancel
              </div>

              <div
                onClick={confirmDelete}
                className="px-5 py-2.5 rounded-xl bg-red-600 text-white hover:bg-red-700"
              >
                Delete
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EditRecipe;
