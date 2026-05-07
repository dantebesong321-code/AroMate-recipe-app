import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h2>Oops, nothing here!</h2>

      <h5>Please return to Home Page</h5>

      <Link to={"/"}>
        <img src={pokeballImg} alt="pokeball" width={70} />
      </Link>
    </div>
  );
}

export default NotFoundPage;
