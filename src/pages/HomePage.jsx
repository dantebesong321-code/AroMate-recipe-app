import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Dashboard from "../components/Dashboard";
import homePageImage from "../assets/homepage-img.jpg";
import homePgImage1 from "../assets/home-pg-sub-1.jpg";
import homePgImage2 from "../assets/home-pg-sub-2.jpg";
import homePgImage3 from "../assets/home-pg-sub-3.jpg";

function HomePage(props) {
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
            <Link to="/dashboard">
              <button className="main-cta">Explore Recipes</button>
            </Link>
          </div>{" "}
          <br />
        </div>
        <img src={homePageImage} height="350px" width="auto" alt="" />
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
        <img src={homePgImage1} height="150px" width="auto" alt="" />

        <img src={homePgImage2} height="150px" width="auto" alt="" />

        <img src={homePgImage3} height="150px" width="auto" alt="" />
      </div>{" "}
      <br />
      <hr />
    </div>
  );
}

export default HomePage;
