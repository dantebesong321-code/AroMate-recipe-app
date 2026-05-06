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
// import { Navbar } from "react-bootstrap";
import MainNavbar from "./components/MainNavbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <MainNavbar />

      <div className="grid-container">
        <div className="side-bar">
          <Sidebar />
        </div>

        <div className="page-area">
          <MyNavbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipes/create" element={<CreateRecipe />} />
            <Route path="/recipes/edit/:recipeId" element={<EditRecipe />} />
            <Route path="/recipes/:recipeId" element={<RecipeDetail />} />
            <Route path="/recipes" element={<RecipeList />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
