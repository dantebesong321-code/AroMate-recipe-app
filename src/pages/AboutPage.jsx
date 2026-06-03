import { BiBorderRadius } from "react-icons/bi";
import aboutPageImg from "../assets/home-pg-sub-2.jpg";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="aboutPg-img">
        <img src={aboutPageImg} width={"40%"} />
      </div>

      <div className="about-page-content">
        <h3>About</h3>
        <p>
          AroMate is a modern recipe web application where users can discover,
          create, manage, and bookmark delicious recipes in one place. Designed
          with a clean and intuitive interface, AroMate makes cooking
          inspiration easy and interactive.
        </p>{" "}
      </div>

      <br />
    </div>
  );
}
export default AboutPage;
