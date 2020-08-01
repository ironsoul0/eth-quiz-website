import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../Navbar";
import styles from "./App.module.css";
import Challenges from "../../pages/challenges";


function App() {
  const isLoggedIn = true;

  return (
    <div className={styles.root}>
      <Navbar />
      <Switch>
        <Route path="/challenges">
          <Challenges />
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
