import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../Navbar";
import styles from "./App.module.css";
import Challenges from "../../pages/challenges";
import KnowledgeBase from "../../pages/knowledge";
import Login from "../Login";
import Logout from "../Logout";
import Results from "../../pages/results";
import Leaderboard from "../../pages/leaderboard";

import { useSelector } from "react-redux";

import Quiz from "../../pages/quiz";
import Quest from "../QuestENS";

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
            <Leaderboard />
          </Route>
          <Route path="/knowledge">
            <KnowledgeBase />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>

          <Route path="/quests">
            <Quest />
          </Route>

          <Route path="/quiz" render={(props) => <Quiz {...props} />} />

          <Route path="/results" render={(props) => <Results {...props} />} />

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
    </div>
  );
}

export default App;
