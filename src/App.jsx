import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RecipeList from "./pages/RecipeList";
import RecipeCard from "./components/RecipeCard";
import RecipeDetail from "./pages/RecipeDetail";
import CreateRecipe from "./pages/CreateRecipe";
import EditRecipe from "./pages/EditRecipe";
import SideBar from "./components/SideBar";
import BookmarkPage from "./pages/BookmarkPage";
import MainNavBar from "./components/MainNavBar";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <MainNavBar />

      <div className="grid-container">
        <div className="side-bar">
          <SideBar />
        </div>

        <div className="page-area">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipes/create" element={<CreateRecipe />} />
            <Route path="/recipes/edit/:recipeId" element={<EditRecipe />} />
            <Route path="/recipes/:recipeId" element={<RecipeDetail />} />
            <Route path="/recipes" element={<RecipeList />} />
            <Route path="/bookmarks" element={<BookmarkPage />} />
            <Route path={"*"} element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
