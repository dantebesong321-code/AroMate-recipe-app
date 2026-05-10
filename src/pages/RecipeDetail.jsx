import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import EditRecipe from "./EditRecipe";
import StarRate from "../components/StarRate";
import { MdStar } from "react-icons/md";

function RecipeDetail() {
  const [recipe, setRecipe] = useState(null);
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);

  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/recipes/${recipeId}`,
      );
      console.log(response.data);
      setRecipe(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleReviewSubmit = async () => {
    if (!reviewText || !rating) return;

    const newReview = {
      user: "Anonymous",
      rating: String(rating),
      comment: reviewText,
    };

    let updatedReviews;

    if (editingIndex !== null) {
      updatedReviews = [...recipe.reviews];

      updatedReviews[editingIndex] = newReview;
    } else {
      updatedReviews = [...(recipe.reviews || []), newReview];
    }

    try {
      const updatedRecipe = {
        ...recipe,
        reviews: updatedReviews,
      };

      await axios.put(
        `${import.meta.env.VITE_SERVER_URL}/recipes/${recipeId}`,
        updatedRecipe,
      );

      setRecipe(updatedRecipe);

      setReviewText("");
      setRating(0);
      setEditingIndex(null);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteReview = async (index) => {
    const updatedReviews = recipe.reviews.filter((_, i) => i !== index);

    try {
      const updatedRecipe = {
        ...recipe,
        reviews: updatedReviews,
      };

      await axios.put(
        `${import.meta.env.VITE_SERVER_URL}/recipes/${recipeId}`,
        updatedRecipe,
      );

      setRecipe(updatedRecipe);
    } catch (error) {
      console.log(error);
    }
  };

  const editReview = (review, index) => {
    setReviewText(review.comment);
    setRating(Number(review.rating));
    setEditingIndex(index);
  };

  const deleteRecipe = async () => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/recipes/${recipeId}`,
      );
      navigate("/recipes");
    } catch (error) {
      console.log(error);
    }
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/recipes/${recipeId}`,
      );
      navigate("/recipes");
    } catch (error) {
      console.log(error);
    }
  };

  if (!recipe) {
    return (
      <div className="loader-container">
        <Spinner animation="border" role="status" className="animated-spinner">
          <span className="visually-hidden">Loading...</span>
        </Spinner>

        <p className="loading-text">
          Loading recipe, this make take a moment. Thanks for your patience :)
        </p>
      </div>
    );
  }

  return (
    <div className="recipeDetailsPage">
      <div key={recipeId}>
        <h3>{recipe.title}</h3>
        <img src={recipe.image} alt="recipe" className="recipe-image" />
        <br />
        <h4>Description</h4>
        <p>{recipe.description}</p>
        <br /> <hr />
        <div
          className="taps-icon"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "16px",
            fontSize: "12px",
          }}
        >
          <p> Difficulty: {recipe.difficulty}</p>
          <p>Cooking Time: {recipe.cookingTime} min</p>
        </div>
        <hr />
        <h4>Steps</h4>
        <ul className="recipe-list">
          {Array.isArray(recipe.steps) ? (
            recipe.steps.map((step, index) => <li key={index}>{step}</li>)
          ) : (
            <li>{recipe.steps}</li>
          )}
        </ul>
        <h4>Ingredients</h4>
        <ul className="recipe-list">
          {Array.isArray(recipe.ingredients) ? (
            recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))
          ) : (
            <li>{recipe.ingredients}</li>
          )}
        </ul>{" "}
        <br />
        <hr />
      </div>
      <h3>Reviews</h3>
      <div style={{ marginBottom: "20px" }}>
        <StarRate rating={rating} setRating={setRating} />

        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your review..."
          style={{
            width: "100%",
            marginTop: "12px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={handleReviewSubmit}
          style={{
            marginTop: "10px",
          }}
        >
          {editingIndex !== null ? "Update Review" : "Post Review"}
        </button>
      </div>
      <div>
        {recipe.reviews?.map((review, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: "12px",
              borderRadius: "10px",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              {[...Array(Number(review.rating))].map((_, i) => (
                <MdStar key={i} color="#ffc107" />
              ))}
            </div>

            <p style={{ marginTop: "8px" }}>{review.comment}</p>

            <small>— {review.user}</small>

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              <button onClick={() => editReview(review, index)}>Edit</button>

              <button onClick={() => deleteReview(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>{" "}
      {/* form buttons below */}
      <div className="form-btns">
        <Link to="/dashboard/recipes">
          <button>Back</button>
        </Link>

        <Link to={`/dashboard/recipes/edit/${recipe.id}`}>
          <button>Edit</button>
        </Link>

        <button
          className="main-delete-btn"
          onClick={() => setShowConfirm(true)}
        >
          Delete
        </button>
      </div>
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
export default RecipeDetail;
