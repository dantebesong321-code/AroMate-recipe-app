// import { useEffect, useState } from "react";
// import axios from "axios";
// import RecipeCard from "../components/RecipeCard";
// import { Navigate } from "react-router-dom";

// function BookmarkPage() {
//   const [bookmarkedRecipes, setBookmarkedRecipes] = useState([]);

//   useEffect(() => {
//     getBookmarkedRecipes();
//   }, []);

//   const getBookmarkedRecipes = async () => {
//     try {
//       const response = await axios.get(
//         `${import.meta.env.VITE_SERVER_URL}/recipes`,
//       );

//       const bookmarkedIds = getBookmarks();

//       const filtered = response.data.filter((recipe) =>
//         bookmarkedIds.includes(recipe.id),
//       );

//       setBookmarkedRecipes(filtered);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="recipe-list">
//       <h2>Bookmarked Recipes</h2>

//       <div className="recipe-cards">
//         {bookmarkedRecipes.map((recipe) => (
//           <RecipeCard key={recipe.id} recipe={recipe} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default BookmarkPage;
