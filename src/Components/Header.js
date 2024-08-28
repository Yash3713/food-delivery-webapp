import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between sticky top-0 bg-white z-50  border-2 border-gray-200  rounded-lg items-center shadow-lg">
      <div>
        <Link to="/">
          <img className="w-44 cursor-pointer" src={LOGO_URL}></img>
        </Link>
      </div>
      <div>
        <ul className="flex p-4 m-4 items-center">
          <li className="px-4 hover:font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:font-medium">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 hover:font-medium">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-4  cursor-pointer hover:font-medium">
            <Link to="/cart">Cart - ({cartItems.length} Items)</Link>
          </li>
          <li className="px-4 hover:font-medium">
            <button
              className="login"
              onClick={() => {
                btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
