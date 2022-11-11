import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { logout } from "../../actions/users";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const logout_user = () => {
    console.log("logout clicked");
    dispatch(logout());
  };
  const user = useSelector((state) => state.user.user);
  return (
    <div className={styles.navBarWrapper}>
      <ul className={styles.navBar}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {user ? (
          <li>
            <button onClick={logout_user}>Logout</button>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
