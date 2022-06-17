
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to='/'>
      <div className="flex justify-center items-center text-2xl font-bold p-2">
          
          <h1>Coin Search</h1>
      </div>
    </Link>
  );
};

export default Navbar;
