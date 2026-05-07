import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

function HomePage() {
  return (
    <div className="hompepage">
      <div className="hero">
        <div className="hero-text">
          <h1>Fresh Ideas for Every Kitchen</h1>
          <p>
            Discover delicious recipes for busy weekdays, special occasions, and
            everything in between.
          </p>{" "}
          <br />
          <div className="home-screen-btn">
            <Link to="/recipes">
              <button className="main-cta">Explore Recipes</button>
            </Link>
          </div>
        </div>
        <img
          src="src/assets/ahmadreza-rezaie-HauwfP60Gko-unsplash.jpg"
          height="350px"
          width="auto"
          alt=""
        />
      </div>{" "}
      <br />
      <hr /> <br />
      <h2>Simple Recipes. Great Food.</h2>
      <p>
        Make cooking easier with curated recipes designed for real life and real
        kitchens.
      </p>{" "}
      <br />
      <div className="img-container">
        <img
          src="src/assets/davide-cantelli-jpkfc5_d-DI-unsplash.jpg"
          height="150px"
          width="auto"
          alt=""
        />

        <img
          src="src/assets/andraz-lazic-iy_MT2ifklc-unsplash.jpg"
          height="150px"
          width="auto"
          alt=""
        />

        <img
          src="src/assets/alex-munsell-Yr4n8O_3UPc-unsplash.jpg"
          height="150px"
          width="auto"
          alt=""
        />
      </div>{" "}
      <br />
      <hr />
    </div>
  );
}

export default HomePage;
