import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h2>Oops, nothing here!</h2>

      <h5>Please return to HomePage</h5>

      <Link to={"/"}>
        <h4>Back to home</h4>
      </Link>
    </div>
  );
}

export default NotFoundPage;
