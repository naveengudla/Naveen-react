import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserNameContext from "../utils/userNameContext";
import { useSelector } from "react-redux";

const NavbarComponent = () => {
  const onlineStatus = useOnlineStatus();
  const userName = useContext(UserNameContext)[0];
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <ul className="flex justify-end items-center gap-4">
        <li>
          <p>Online status : {onlineStatus ? "🟢" : "🔴"}</p>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({cartItems.length})</Link>
        </li>
        {userName && (
          <li>
            <span className="text-red-500">{userName}</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavbarComponent;
