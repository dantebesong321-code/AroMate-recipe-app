import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

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
        <p>Dificulty:{recipe.difficulty}</p>
        <p>Cooking Time:{recipe.cookingTime}</p>
        <h4>Steps</h4>
        <p>Steps:{recipe.steps}</p>
        <p>Steps:{recipe.steps}</p>
      </div>
    </div>
  );
}
export default RecipeDetail;
