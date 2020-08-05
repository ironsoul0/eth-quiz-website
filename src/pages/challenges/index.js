import React from "react";
import Topic from "../../components/Topic";

import Header from "../../components/Header";
import styles from "./Challenges.module.css";


function requestToBackend() {
  return [{
    "topic": "Privacy",
    "total": 10,
    "points": 7
  },
  {
    "topic": "DApp Dev",
    "total": 14,
    "points": 8
  },
  {
    "topic": "ZKP",
    "total": 14,
    "points": 2
  },
  {
    "topic": "Privacy",
    "total": 14,
    "points": 2
  },
  {
    "topic": "DApp Dev",
    "total": 14,
    "points": 8
  },
  {
    "topic": "DApp Dev",
    "total": 14,
    "points": 8
  }]
}

function Challenges() {

  const res = requestToBackend()
  const rows = [...Array(Math.ceil(res.length / 4))];

  const productRows = rows.map((row, idx) => res.slice(idx * 4, idx * 4 + 4));
  const content = productRows.map((row, idx) => (
    <div className={styles.topics} key={idx}>
      {row.map(product =>
        <Topic topic={product.topic} done={product.points} total={product.total} />)}
    </div>)
  );

  return (
    <div className={styles.root}>
      <Header>Topics</Header>
      {content}
    </div>

  );
}

export default Challenges;
