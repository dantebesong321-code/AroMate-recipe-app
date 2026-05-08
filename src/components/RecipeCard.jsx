// RecipeCard.jsx
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

function RecipeCard({ recipe }) {
  const getBookmarks = () =>
    JSON.parse(localStorage.getItem("bookmarkedRecipes")) || [];

  const [isBookmarked, setIsBookmarked] = useState(() =>
    getBookmarks().some((r) => r.id === recipe.id),
  );

  const toggleBookmark = () => {
    const current = getBookmarks();

    if (isBookmarked) {
      const updated = current.filter((r) => r.id !== recipe.id);
      localStorage.setItem("bookmarkedRecipes", JSON.stringify(updated));
    } else {
      localStorage.setItem(
        "bookmarkedRecipes",
        JSON.stringify([...current, recipe]),
      );
    }

    setIsBookmarked((prev) => !prev);
  };

  return (
    <div className="card">
      <Card
        className="recipe-card"
        style={{
          width: "15rem",
          height: "250px",
          padding: "12px",
          display: "flex",
          flexDirection: "column",
          borderRadius: "16px",
          textAlign: "left",
        }}
      >
        <div
          style={{ height: "180px", overflow: "hidden", position: "relative" }}
        >
          <Card.Img
            variant="top"
            src={recipe.image}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <button
            onClick={toggleBookmark}
            style={{
              position: "absolute",
              top: "8px",
              right: "8px",
              background: "rgba(255,255,255,0.85)",
              border: "none",
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            {isBookmarked ? (
              <BsBookmarkFill color="#008840" size={16} />
            ) : (
              <BsBookmark color="#7f7f7f" size={16} />
            )}
          </button>
        </div>

        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "8px",
            justifyContent: "space-evenly",
            flexGrow: 1,
          }}
        >
          <Card.Title style={{ fontWeight: "bold", fontSize: "19px" }}>
            {recipe.title}
          </Card.Title>
          <Card.Text style={{ fontSize: "14px" }}>
            {recipe.description}
          </Card.Text>
          <br />
          <Link to={`/recipes/${recipe.id}`}>
            <Button variant="primary">See more</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RecipeCard;
