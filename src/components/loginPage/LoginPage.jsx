import React from "react";

import googleImage from "../../assets/googleImage.png";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const googleLogin = () => {
    window.open("https://appbuddy.onrender.com/auth/google", "_self");
  };

  return (
    <>
      {/* <div className={styles.LoginPage}>
        <div className={styles.loginForm}>
          <h1>Login Page</h1>
          <div>
            <GoogleLogin clientId="YOUR_CLIENT_ID_HERE"></GoogleLogin>
          </div>
        </div>
      </div> */}
      <div className={styles.loginPage}>
        <div className={styles.loginForm}>
          <h1>Login</h1>
          <div className={styles.googleContainer} onClick={googleLogin}>
            <img src={googleImage} alt="Google Icon" />
            <p>Login With Google</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
