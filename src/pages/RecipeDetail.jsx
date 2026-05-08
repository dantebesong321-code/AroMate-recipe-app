import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import EditRecipe from "./EditRecipe";

function RecipeDetail() {
  const [recipe, setRecipe] = useState(null);
  const { recipeId } = useParams();
  const navigate = useNavigate();

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
        </ul>
      </div>

      <div className="form-btns">
        <Link to="/recipes">
          <button>Back</button>
        </Link>

        <Link to={`/recipes/edit/${recipe.id}`}>
          <button>Edit</button>
        </Link>

        <button className="main-delete-btn" onClick={deleteRecipe}>
          Delete{" "}
        </button>
      </div>
    </div>
  );
}
export default RecipeDetail;
