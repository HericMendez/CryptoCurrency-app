import { FaCoins } from "react-icons/fa";
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className="Navbar">
          <FaCoins className="icon" />
          <h1><span className="purple">Search</span></h1>
      </div>
    </div>
  );
};

export default Navbar;
