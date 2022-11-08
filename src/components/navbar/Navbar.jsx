import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div className={styles.navBarWrapper}>
      <ul className={styles.navBar}>
        <li>
          <Link to="/">Home</Link>
        </li>
        {user ? (
          <li>
            <Link to="/login">Logout</Link>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
