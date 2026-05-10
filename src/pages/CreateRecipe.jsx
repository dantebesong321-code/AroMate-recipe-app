import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

function CreateRecipe() {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [steps, setSteps] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleTitle = (e) => setTitle(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleDifficulty = (e) => setDifficulty(e.target.value);
  const handleCookingTime = (e) => setCookingTime(e.target.value);
  const handleSteps = (e) => setSteps(e.target.value);
  const handleIngredients = (e) => setIngredients(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      title,
      image,
      description,
      difficulty,
      cookingTime,
      steps,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/recipes`,
        body,
      );
      navigate("dashboard/recipes");
    } catch (error) {}
  };

  const deleteRecipe = async () => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/recipes/${recipeId}`,
      );
      navigate("/dashboard/recipes");
    } catch (error) {}
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
    <div className="create-recipe">
      <h3>Create recipe</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-element">
          <label>Title</label>
          <input
            type="text"
            name="name"
            placeholder="Title"
            value={title}
            onChange={handleTitle}
          />{" "}
        </div>
        <div className="form-element">
          <label>Image</label>
          <input
            type="text"
            name="image"
            placeholder="ImageUrl"
            value={image}
            onChange={handleImage}
          />
        </div>{" "}
        <div className="form-element">
          <label className="form-label">Description</label>
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            rows="3"
            value={description}
            onChange={handleDescription}
          ></textarea>
        </div>
        <div className="form-element">
          <label>Difficulty</label>
          <input
            type="text"
            name="difficulty"
            placeholder="..."
            value={difficulty}
            onChange={handleDifficulty}
          />
        </div>
        <div className="form-element">
          <label>Cooking Time</label>
          <input
            type="text"
            name="cookingTime"
            placeholder="Cooking Time"
            value={cookingTime}
            onChange={handleCookingTime}
          />
        </div>
        <div className="form-element">
          <label>Steps</label>
          <textarea
            type="text"
            name="steps"
            placeholder="Steps"
            rows="5"
            value={steps}
            onChange={handleSteps}
          ></textarea>
        </div>
        {"  "}
        <div className="form-element">
          <label>Ingredients</label>
          <textarea
            type="text"
            name="ingredients"
            placeholder="ingredients"
            rows="5"
            value={ingredients}
            onChange={handleIngredients}
          ></textarea>
        </div>{" "}
        <br />
        <div className="form-btns">
          <button type="submit">Add recipe</button>

          <button
            className="main-delete-btn"
            onClick={() => setShowConfirm(true)}
          >
            Delete
          </button>
        </div>
      </form>

      {showConfirm && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Delete Recipe?</h3>
            <p>This action cannot be undone.</p>

            <div className="modal-actions">
              <button
                className="cancel-btn"
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </button>

              <button className="confirm-delete-btn" onClick={confirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateRecipe;
