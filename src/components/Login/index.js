import React, { useState } from "react";
import styles from "./Login.module.css";


function Login(props) {
  
  return (
    

    <form className={styles.card}>
        <h3 className={styles.title}>Login</h3>
        <input className={styles.input} type='email' placeholder='E-mail'/>
        <input className={styles.input} type='password' placeholder='Password'/>
        <button type='button'>Login</button>
        {/* Change URL link  */}
        <a href="google.com" URL> Register an account </a>
    </form>
  );
}

export default Login;
