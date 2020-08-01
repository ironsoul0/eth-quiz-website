import React from "react";

import styles from "./App.module.css";
import Topic from "../Topic";

function App() {
  return (
    <div className={styles.root}>
      <h1>Hi, am I your next great app?</h1>
      <Topic
        topic="Privacy"
        url="https://source.unsplash.com/user/erondu/600x400"
        done="8"
        total="10"
      />
    </div>
  );
}

export default App;
