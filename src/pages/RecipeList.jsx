import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import CreateRecipe from "./CreateRecipe";
import Spinner from "react-bootstrap/Spinner";
import SearchBar from "../components/SearchBar";

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
      console.log(response.data);
      setAllRecipes(response.data);
      setFilteredRecipes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!allRecipes) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually">Loading...</span>
      </Spinner>
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
        <Link to="/recipes/create">
          <button className="main-cta">Create recipe</button>
        </Link>
      </div>
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
