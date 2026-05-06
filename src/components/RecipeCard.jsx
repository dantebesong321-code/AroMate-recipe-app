import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function RecipeCard({ recipe }) {
  return (
    <div>
      <Card
        className="recipe-card"
        style={{
          width: "15rem",
          height: "350px",
          padding: "12px",
          backgroundColor: "#f4f6f6",
          display: "flex",
          flexDirection: "column",
          borderRadius: "16px",
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
            justifyContent: "space-between",
            flexGrow: 1,
          }}
        >
          <Card.Title
            style={{
              fontSize: "1.1rem",
              fontWeight: "bold",
            }}
          >
            <br />
            {recipe.title}
          </Card.Title>
          <Card.Text>{recipe.description}</Card.Text> <br />
          <Link to={`/recipes/${recipe.id}`}>
            <Button variant="primary">See more</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
export default RecipeCard;
