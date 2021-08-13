import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.util";
import {useSelector } from "react-redux";


const Header = () => {

  const currentUser = useSelector(state => state.user.currentUser)

  
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        {currentUser && currentUser.displayName != null ? (
          <div className="option">{`Welcome, ${
            currentUser.displayName.split(" ")[0]
          }!`}</div>
        ) : (
          ""
        )}
      </div>

      <div className="options">
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
      </div>
    </div>
  );
};



export default (Header);
