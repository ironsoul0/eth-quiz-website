import React, { useState, useEffect } from "react";
import styles from "./Leaderboard.module.css";
import Header from "../../components/Header";

function requestToBackend() {
  return {
    table: [
      {
        user: "v.buterin",
        score: 1337,
      },
      {
        user: "v.buterin",
        score: 1337,
      },
      {
        user: "v.buterin",
        score: 1337,
      },
      {
        user: "v.buterin",
        score: 1337,
      },
      {
        user: "v.buterin",
        score: 1337,
      },
      {
        user: "v.buterin",
        score: 1337,
      },
      {
        user: "v.buterin",
        score: 1337,
      },
      {
        user: "v.buterin",
        score: 1337,
      },
      {
        user: "v.buterin",
        score: 1337,
      },
      {
        user: "v.buterin",
        score: 1337,
      },
    ],
    place: "137/1337",
  };
}

function getLeaders() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(requestToBackend());
    }, 500);
  });
}

function Leaderboard() {
  const [data, setData] = useState({
    loading: true,
    info: {},
  });

  useEffect(() => {
    getLeaders().then((info) => {
      setData({
        info,
        loading: false,
      });
    });
  }, []);

  return (
    <div className={styles.root}>
      <Header>TOP 10</Header>
      {data.loading && <p className={styles.loader}>Loading...</p>}
      {!data.loading && (
        <p className={styles.place}>Your place: {data.info.place}</p>
      )}
      <div className={styles.leaders}>
        {!data.loading &&
          [{ user: "User", score: "Score" }, ...data.info.table].map(
            (leaderInfo, index) => {
              return (
                <div className={styles.leader}>
                  <p>{!index ? "Rank" : `#${index}`}</p>
                  <p>{leaderInfo.user}</p>
                  <p>{leaderInfo.score}</p>
                </div>
              );
            }
          )}
      </div>
    </div>
  );
}

export default Leaderboard;
