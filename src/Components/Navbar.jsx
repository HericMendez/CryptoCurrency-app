import { FaCoins } from "react-icons/fa";
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to='/'>
      <div className="Navbar">
          
          <h1>Coin Search</h1>
      </div>
    </Link>
  );
};

export default Navbar;
