import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function CreateRecipe() {
  const [recipe, setRecipe] = useState(null);
  const { recipeId } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:5008/recipes`);
      console.log(response.data);
      setRecipe(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Create Recipe</h1>
    </div>
  );
}
export default CreateRecipe;
