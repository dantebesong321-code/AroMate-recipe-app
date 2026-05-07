import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

function HomePage() {
  return (
    <div className="hompepage">
      <div className="home-img">
        {/* <Image src="/assets/davide-cantelli-jpkfc5_d-DI-unsplash.jpg" fluid /> */}
        <img
          src="src/assets/davide-cantelli-jpkfc5_d-DI-unsplash.jpg"
          height="450px"
          width="auto"
          alt=""
        />
      </div>

      <div className="home-screen-btn">
        <Link to="/recipes">
          <button className="main-cta">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
