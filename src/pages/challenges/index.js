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
        <Topic
          url="https://source.unsplash.com/user/erondu/600x400"
          done="5"
          total="10"
          topic="ZK"
        />
        <Topic
          url="https://source.unsplash.com/user/erondu/600x400"
          done="5"
          total="10"
          topic="Security"
        />
        <Topic
          url="https://source.unsplash.com/user/erondu/600x400"
          done="5"
          total="10"
          topic="Proofs"
        />
        <Topic
          url="https://source.unsplash.com/user/erondu/600x400"
          done="5"
          total="10"
          topic="DApp Dev"
        />
      </div>
      <div className={styles.topics}>
        <Topic
          url="https://source.unsplash.com/user/erondu/600x400"
          done="5"
          total="10"
          topic="ZK"
        />
        <Topic
          url="https://source.unsplash.com/user/erondu/600x400"
          done="5"
          total="10"
          topic="Security"
        />
        <Topic
          url="https://source.unsplash.com/user/erondu/600x400"
          done="5"
          total="10"
          topic="Proofs"
        />
        <Topic
          url="https://source.unsplash.com/user/erondu/600x400"
          done="5"
          total="10"
          topic="DApp Dev"
        />
      </div>
    </div>
  );
}

export default Challenges;
