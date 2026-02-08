import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/user/101">Go to User 101</Link>
    </div>
  );
}

export default Home;
