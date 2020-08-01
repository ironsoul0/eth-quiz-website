import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "../../components/Header";
import styles from "./Challenges.module.css";

function Challenges() {
  return (
    <div className={styles.root}>
      <Header>Topics</Header>
    </div>
  );
}

export default Challenges;
