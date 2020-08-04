import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../Navbar";
import styles from "./App.module.css";
import Challenges from "../../pages/challenges";
import KnowledgeBase from "../../pages/knowledge";
import Login from "../Login";
import Logout from "../Logout";

import { useSelector } from "react-redux";
import CreateQuestion from "../CreateQuestion";

function App() {
  const isLoggedIn = true;

  const token = useSelector((state) => state.auth.token);

  return (
    <div className={styles.root}>
      <Navbar />
      {token ? (
        <Switch>
          <Route path="/challenges">
            <Challenges />
          </Route>
          <Route path="/leaderboard">
            <h1>How about leaderboard?</h1>
          </Route>
          <Route path="/knowledge">
            <KnowledgeBase />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Redirect to="/challenges" />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Redirect to="/" />
        </Switch>
      )}
      {/* <Login /> */}

      <CreateQuestion/>
    </div>
  );
}

export default App;
