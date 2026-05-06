import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RecipeList from "./pages/RecipeList";
import RecipeCard from "./components/RecipeCard";
import RecipeDetail from "./pages/RecipeDetail";
import MyNavbar from "./components/MyNavbar";
import CreateRecipe from "./pages/CreateRecipe";
import EditRecipe from "./pages/EditRecipe";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <MyNavbar />
      <div className="grid-container">
        <div className="side-bar">
          <Sidebar />
        </div>

        <div className="page-area">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipes/create" element={<CreateRecipe />} />
            <Route path="/recipes/edit/:recipeId" element={<EditRecipe />} />
            <Route path="/recipes/:recipeId" element={<RecipeDetail />} />
            <Route path="/recipes" element={<RecipeList />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
