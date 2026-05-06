import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import CreateRecipe from "./CreateRecipe";
import Spinner from "react-bootstrap/Spinner";

function RecipeList() {
  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5008/recipes");
      console.log(response.data);
      setAllRecipes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (allRecipes.length === 0) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div className="recipe-list">
      <h3>Recipes</h3>
      <div className="recipe-cards">
        {allRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
