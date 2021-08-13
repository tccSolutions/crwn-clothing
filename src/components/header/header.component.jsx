import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.util";
import { useSelector } from "react-redux";
import { ShoppingCart } from "../shopping-cart/shopping-cart.component";
import { CartDropdown } from "../shopping-cart-dropdown/shopping-cart-dropdown.component";

const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const showCart = useSelector(state=>state.cart.hidden);
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
     
      <div className="options">
        {currentUser && currentUser.displayName != null ? (
          <div className="option welcome">{`Welcome, ${
            currentUser.displayName.split(" ")[0]
          }!`}</div>
        ) : (
          ""
        )}
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link to="/signin" className="option">
            Sign in
          </Link>
        )}
        <ShoppingCart/> 
        </div> 
        {showCart?null:<CartDropdown/>}
      
    </div>
  );
};

export default Header;
