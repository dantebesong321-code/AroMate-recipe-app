import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import CreateRecipe from "./CreateRecipe";
import Spinner from "react-bootstrap/Spinner";
import SearchBar from "../components/SearchBar";
import { BiColorFill } from "react-icons/bi";

function RecipeList(props) {
  const [allRecipes, setAllRecipes] = useState(null);
  const [filteredRecipes, setFilteredRecipes] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/recipes`,
      );

      setAllRecipes(response.data);
      setFilteredRecipes(response.data);
    } catch (error) {}
  };

  if (!allRecipes) {
    return (
      <div className="loader-container">
        <Spinner animation="border" role="status" className="animated-spinner">
          <span className="visually-hidden">Loading...</span>
        </Spinner>

        <p className="loading-text">
          Loading recipes, this may take a moment. Thanks for your patience :)
        </p>
      </div>
    );
  }

  return (
    <div className="recipe-list">
      <div
        className="searchbar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          margin: "24px",
          gap: "12px",
        }}
      >
        {" "}
        <SearchBar
          allRecipes={allRecipes}
          setFilteredRecipes={setFilteredRecipes}
        />
        <Link to="/dashboard/recipes/create">
          <button className="main-cta">Create recipe</button>
        </Link>
      </div>{" "}
      <hr />
      <h3>Recipes</h3>
      <div className="recipe-cards">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
