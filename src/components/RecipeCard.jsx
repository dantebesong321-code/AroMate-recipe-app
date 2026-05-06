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
          backgroundColor: "#ffffff",
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
          <Card.Text style={{ fontSize: "16px" }}>
            {recipe.description}
          </Card.Text>{" "}
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
