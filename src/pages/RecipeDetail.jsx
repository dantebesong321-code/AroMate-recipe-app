import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import StarRate from "../components/StarRate";
import { MdStar } from "react-icons/md";

import {
  Clock,
  ChefHat,
  ArrowLeft,
  Edit3,
  Trash2,
  MessageSquare,
} from "lucide-react";

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
  }, [recipeId]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/recipes/${recipeId}`,
      );
      setRecipe(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleReviewSubmit = async () => {
    if (!reviewText || !rating) return;
    const newReview = {
      user: "Anonymous Cook",
      rating: String(rating),
      comment: reviewText,
    };
    let updatedReviews =
      editingIndex !== null
        ? recipe.reviews.map((rev, i) => (i === editingIndex ? newReview : rev))
        : [...(recipe.reviews || []), newReview];

    try {
      const updatedRecipe = { ...recipe, reviews: updatedReviews };
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
      const updatedRecipe = { ...recipe, reviews: updatedReviews };
      await axios.put(
        `${import.meta.env.VITE_SERVER_URL}/recipes/${recipeId}`,
        updatedRecipe,
      );
      setRecipe(updatedRecipe);
    } catch (error) {
      console.log(error);
    }
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/recipes/${recipeId}`,
      );
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  if (!recipe) {
    return (
      <div className="loader-container">
        <Spinner animation="border" className="animated-spinner" />
        <p className="loading-text">Getting the secret ingredients ready...</p>
      </div>
    );
  }

  return (
    <div className="page-area recipe-detail-container">
      {/* HEADER NAVIGATION */}
      <div className="detail-nav">
        <button onClick={() => navigate(-1)} className="back-link">
          <ArrowLeft size={18} /> Back to Gallery
        </button>
      </div>

      <div className="recipe-main-content">
        <div className="recipe-hero-card">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="detail-hero-img"
          />
          <div className="recipe-header-info">
            <h1>{recipe.title}</h1>
            <div className="quick-stats">
              <div className="stat-item">
                <ChefHat size={20} className="stat-icon" />
                <span>
                  <strong>Difficulty:</strong> {recipe.difficulty}
                </span>
              </div>
              <div className="stat-item">
                <Clock size={20} className="stat-icon" />
                <span>
                  <strong>Time:</strong> {recipe.cookingTime} mins
                </span>
              </div>
            </div>
            <p className="detail-description">{recipe.description}</p>
          </div>
        </div>
        <div className="recipe-grid-details">
          <div className="details-card">
            <h4>Ingredients</h4>
            <ul className="styled-list">
              {Array.isArray(recipe.ingredients) ? (
                recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)
              ) : (
                <li>{recipe.ingredients}</li>
              )}
            </ul>
          </div>

          <div className="details-card">
            <h4>Preparation Steps</h4>
            <ol className="styled-steps">
              {Array.isArray(recipe.steps) ? (
                recipe.steps.map((step, i) => <li key={i}>{step}</li>)
              ) : (
                <li>{recipe.steps}</li>
              )}
            </ol>
          </div>
        </div>{" "}
        <br />
        <hr className="detail-divider" />
        {/* REVIEWS SECTION */}
        <section className="reviews-section">
          <h3>
            <MessageSquare size={20} style={{ marginRight: "8px" }} /> Community
            Reviews
          </h3>
          <div className="add-review-box">
            <StarRate rating={rating} setRating={setRating} />
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="How did it taste? Any tips for other cooks?"
              className="review-textarea"
            />
            <button onClick={handleReviewSubmit} className="main-cta-btn">
              {editingIndex !== null ? "Update My Review" : "Share Review"}
            </button>
          </div>

          <div className="reviews-list">
            {recipe.reviews?.map((review, index) => (
              <div key={index} className="review-item">
                <div className="review-header">
                  <div className="review-stars">
                    {[...Array(5)].map((_, i) => (
                      <MdStar
                        key={i}
                        color={
                          i < Number(review.rating) ? "#ffc107" : "#e2e8f0"
                        }
                      />
                    ))}
                  </div>
                  <span className="review-user">{review.user}</span>
                </div>
                <p>{review.comment}</p>
                <div className="review-actions">
                  <button onClick={() => setEditingIndex(index)}>Edit</button>
                  <button
                    onClick={() => deleteReview(index)}
                    className="delete-text"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* PAGE ACTIONS */}
        <div className="detail-footer-actions">
          <Link to={`/dashboard/recipes/edit/${recipeId}`}>
            <button className="secondary-cta-btn">
              <Edit3 size={16} /> Edit Recipe
            </button>
          </Link>
          <button
            className="main-delete-btn"
            onClick={() => setShowConfirm(true)}
          >
            <Trash2 size={16} /> Delete Recipe
          </button>
        </div>
      </div>

      {/* CONFIRMATION MODAL */}
      {showConfirm && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Delete this recipe?</h3>
            <p>
              This will permanently remove <strong>{recipe.title}</strong> from
              your collection.
            </p>
            <div className="modal-actions">
              <button
                className="cancel-btn"
                onClick={() => setShowConfirm(false)}
              >
                Keep it
              </button>
              <button className="confirm-delete-btn" onClick={confirmDelete}>
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeDetail;
