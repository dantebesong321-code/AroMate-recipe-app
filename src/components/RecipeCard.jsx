import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import BookmarkIcon from "./BookmarkIcon";

function RecipeCard({ recipe }) {
  const cardStyle = {};

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
        <div style={{ height: "180px", overflow: "hidden" }}>
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
          <Card.Title
            style={{
              fontSize: "1.1rem",
              fontWeight: "bold",
              fontSize: "19px",
            }}
          >
            {recipe.title}
          </Card.Title>
          <Card.Text style={{ fontSize: "14px" }}>
            {recipe.description}
          </Card.Text>{" "}
          <br />
          <Link to={`/recipes/${recipe.id}`}>
            <Button variant="primary">See more</Button>
          </Link>
          {/* <BookmarkIcon recipeId={recipe.id} /> */}
        </Card.Body>
      </Card>
    </div>
  );
}
export default RecipeCard;
