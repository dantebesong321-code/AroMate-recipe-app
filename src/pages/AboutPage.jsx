import { BiBorderRadius } from "react-icons/bi";
import aboutPageImg from "../assets/home-pg-sub-2.jpg";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="h-30%">
        <img
          className="w-full h-[380px] object-cover"
          src={aboutPageImg}
          width={"40%"}
        />
      </div>{" "}
      <br />
      <div className="about-page-content">
        <h2>About</h2>
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
