// import { useEffect, useState } from "react";
// import axios from "axios";

// function FavoriteRecipes() {
//   const [favoriteRecipes, setFavoriteRecipes] = useState([]);

//   useEffect(() => {
//     const storedFavorites =
//       JSON.parse(localStorage.getItem("favoriteRecipes")) || [];

//     setFavoriteRecipes(storedFavorites);
//   }, []);

//   const removeFromFavorites = (recipeId) => {
//     const updatedFavorites = favoriteRecipes.filter((recipe) => {
//       return recipe.id !== recipeId;
//     });

//     setFavoriteRecipes(updatedFavorites);

//     localStorage.setItem("favoriteRecipes", JSON.stringify(updatedFavorites));
//   };

//   return (
//     <div>
//       <h1>My Favorite Recipes</h1>

//       {favoriteRecipes.length === 0 ? (
//         <p>No favorite recipes yet.</p>
//       ) : (
//         favoriteRecipes.map((recipe) => {
//           return (
//             <FavoriteRecipeCard
//               key={recipe.id}
//               recipe={recipe}
//               removeFromFavorites={removeFromFavorites}
//             />
//           );
//         })
//       )}
//     </div>
//   );
// }

// export default FavoriteRecipes;
