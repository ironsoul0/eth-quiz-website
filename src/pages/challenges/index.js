import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Topic from "../../components/Topic";

import Header from "../../components/Header";
import styles from "./Challenges.module.css";

function Challenges() {
  return (
    <div className={styles.root}>
      <Header>Topics</Header>
      <div className={styles.topics}>
        <Topic done="5" total="10" />
        <Topic done="5" total="10" />
        <Topic done="5" total="10" />
        <Topic done="5" total="10" />
      </div>
      <div className={styles.topics}>
        <Topic done="5" total="10" />
        <Topic done="5" total="10" />
        <Topic done="5" total="10" />
        <Topic done="5" total="10" />
      </div>
    </div>
  );
}

export default Challenges;
