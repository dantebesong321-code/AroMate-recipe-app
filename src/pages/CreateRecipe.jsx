import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateRecipe() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [steps, setSteps] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [servings, setServings] = useState("");
  const [tags, setTags] = useState([]);

  const availableTags = ["breakfast", "lunch", "dinner"];

  const handleTagToggle = (tag) => {
    if (tags.includes(tag)) {
      setTags(tags.filter((item) => item !== tag));
    } else {
      setTags([...tags, tag]);
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
      servings,
      tags,
      ingredients: ingredients
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean),

      steps: steps
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean),

      reviews: [],
    };

    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/recipes`, body);

      navigate("/dashboard/recipes");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">Create Recipe</h1>

          <p className="mt-2 text-slate-600">
            Add a new recipe to your AroMate cookbook.
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
                required
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
                  alt="Recipe preview"
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
                placeholder="Tell us about this recipe..."
                className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-green-100 focus:border-green-500"
              />
            </div>

            {/* DIFFICULTY + TIME */}
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
                  placeholder="20"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-green-100 focus:border-green-500"
                />
              </div>
            </div>

            {/* SERVINGS */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Servings
              </label>

              <input
                type="number"
                value={servings}
                onChange={(e) => setServings(e.target.value)}
                placeholder="2"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-green-100 focus:border-green-500"
              />
            </div>

            {/* TAGS */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Categories
              </label>

              <div className="flex flex-wrap gap-3">
                {availableTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => handleTagToggle(tag)}
                    className={`px-4 py-2 rounded-full border transition ${
                      tags.includes(tag)
                        ? "bg-green-600 text-white border-green-600"
                        : "bg-white text-slate-600 border-slate-300 hover:border-green-400"
                    }`}
                  >
                    {tag.charAt(0).toUpperCase() + tag.slice(1)}
                  </button>
                ))}
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
                placeholder="One step per line..."
                className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-green-100 focus:border-green-500"
              />
            </div>

            {/* BUTTONS */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-3 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition"
              >
                Create Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateRecipe;
