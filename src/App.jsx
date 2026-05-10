import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RecipeList from "./pages/RecipeList";
import RecipeCard from "./components/RecipeCard";
import RecipeDetail from "./pages/RecipeDetail";
import CreateRecipe from "./pages/CreateRecipe";
import EditRecipe from "./pages/EditRecipe";
import Sidebar from "./components/Sidebar";
import BookmarkPage from "./pages/BookmarkPage";
import MainNavbar from "./components/MainNavbar";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import Dashboard from "./components/Dashboard";
import AboutPage from "./pages/AboutPage";
import { Outlet } from "react-router-dom";
import StarRate from "./components/StarRate";

function App() {
  return (
    <>
      <MainNavbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<RecipeList />} />
          <Route path="recipes" element={<RecipeList />} />
          <Route path="recipes/create" element={<CreateRecipe />} />
          <Route path="recipes/edit/:recipeId" element={<EditRecipe />} />
          <Route path="recipes/:recipeId" element={<RecipeDetail />} />
          <Route path="bookmarks" element={<BookmarkPage />} />
          <Route path="aboutpage" element={<AboutPage />} />
          <Route path={"*"} element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
