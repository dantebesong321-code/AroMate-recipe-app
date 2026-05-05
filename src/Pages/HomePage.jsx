import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

function HomePage() {
  return (
    <div
      className="Hompepage"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative",
        minWidth: "100svh",
      }}
    >
      <div className="home-img">
        <img
          src="src/assets/davide-cantelli-jpkfc5_d-DI-unsplash.jpg"
          width={"450px"}
          alt=""
        />
      </div>
      ;
      <div className="home-screen-btn" style={{ alignItems: "center" }}>
        <Link to="/recipes">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
