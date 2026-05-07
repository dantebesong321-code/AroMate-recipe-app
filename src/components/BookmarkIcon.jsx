// import { useEffect, useState } from "react";
// import axios from "axios";
// import RecipeCard from "../components/RecipeCard";
// import { Navigate } from "react-router-dom";
// // import {
// //   addBookmark,
// //   removeBookmark,
// //   isBookmarked,
// // } from "../utils/bookmarkUtils";

// function BookmarkIcon({ recipe }) {
//   const [bookmarked, setBookmarked] = useState(false);

//   useEffect(() => {
//     setBookmarked(isBookmarked(recipe.id));
//   }, [recipe.id]);

//   const handleBookmark = () => {
//     if (bookmarked) {
//       removeBookmark(recipe.id);
//       setBookmarked(false);
//     } else {
//       addBookmark(recipe);
//       setBookmarked(true);
//     }
//   };

//   return <button onClick={handleBookmark}>{bookmarked ? "★" : "☆"}</button>;
// }

// export default BookmarkIcon;
