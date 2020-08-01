import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import styles from "./Header.module.css";

function Header({ children }) {
  return <h1 className={styles.root}>{children}</h1>;
}

export default Header;
