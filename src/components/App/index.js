import React from "react";

import { Switch, Route, Link, Redirect } from "react-router-dom";
import Navbar from "../Navbar";
import styles from "./App.module.css";
import Topic from "../Topic";

function App() {
  return (
    <div className={styles.root}>
      <Navbar />
      <Switch>
        <Route path="/challenges">
          <h1>How about challenges?</h1>
        </Route>
        <Route path="/leaderboard">
          <h1>How about leaderboard?</h1>
        </Route>
        <Route path="/knowledge">
          <h1>Knowledge base?</h1>
        </Route>
        <Redirect to="/challenges" />
      </Switch>
    </div>
  );
}

export default App;
