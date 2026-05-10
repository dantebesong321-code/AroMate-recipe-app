import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="not-found-page">
      {" "}
      <br />
      <h2>Oops, nothing here!</h2>
      <h5></h5>
      <Link to={"/dashboard"}>
        <h4>Return to Dashboard</h4>
      </Link>
    </div>
  );
}

export default NotFoundPage;
