import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function RecipeCard({ recipe }) {
  return (
    <Card
      style={{
        borderRadius: "16px",
        width: "18rem",
        height: "50%",
        backgroundColor: "#f4f6f6",
      }}
    >
      <Card.Img
        variant="top"
        src={recipe.image}
        style={{ width: "280px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
        <Card.Text>{recipe.description}</Card.Text>
        <Link to={`/recipes/${recipe.id}`}>
          <Button variant="primary">See more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
export default RecipeCard;
