import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RecipeList from "./Pages/RecipeList";
import RecipeCard from "./components/RecipeCard";
import RecipeDetail from "./pages/RecipeDetail";
import MyNavbar from "./components/MyNavbar";
import CreateRecipe from "./pages/CreateRecipe";

function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetail />} />
        <Route path="/recipes/create" element={<CreateRecipe />} />
        <Route path="/recipes" element={<RecipeList />} />
      </Routes>
    </>
  );
}

export default App;
