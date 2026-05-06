import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import EditRecipe from "./EditRecipe";

function RecipeDetail() {
  const [recipe, setRecipe] = useState(null);
  const { recipeId } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5008/recipes/${recipeId}`,
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
        `http://localhost:5008/recipes/${recipeId}`,
      );
      navigate("/recipes");
    } catch (error) {
      console.log(error);
    }
  };

  if (!recipe) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div className="recipeDetailsPage">
      <div key={recipeId}>
        <h3>{recipe.title}</h3>
        <img
          src={recipe.image}
          alt="recipe Image"
          height="300px"
          width="auto"
        />
        <br />
        <h4>Description</h4>
        <p>{recipe.description}</p>
        <br />
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
          <p> Dificulty:{recipe.difficulty}</p>
          <p>Cooking Time: {recipe.cookingTime} min</p>
        </div>
        <br />
        <h4>Steps</h4>
        <p>{recipe.steps}</p>
      </div>
      <div className="form-btns">
        <Link to="/recipes">
          <button>Back</button>
        </Link>

        <button onClick={deleteRecipe}>Delete </button>
      </div>
    </div>
  );
}
export default RecipeDetail;
