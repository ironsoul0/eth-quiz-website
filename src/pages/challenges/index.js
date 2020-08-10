import React, { useEffect, useState } from "react";
import Topic from "../../components/Topic";

import Header from "../../components/Header";
import styles from "./Challenges.module.css";
import axios from "axios";


// function requestToBackend() {


//   return [{
//     "topic": "Privacy",
//     "total": 10,
//     "points": 7
//   },
//   {
//     "topic": "DApp Dev",
//     "total": 14,
//     "points": 8
//   },
//   {
//     "topic": "ZKP",
//     "total": 14,
//     "points": 2
//   },
//   {
//     "topic": "Privacy",
//     "total": 14,
//     "points": 2
//   },
//   {
//     "topic": "DApp Dev",
//     "total": 14,
//     "points": 8
//   },
//   {
//     "topic": "DApp Dev",
//     "total": 14,
//     "points": 8
//   }]
// }


function Challenges() {

  const [topics, setTopics] = useState([])
  useEffect(() => {
    async function getTopics() {
      const { data } = await axios.get('/quiz/get-user-scores');
      setTopics(data)   
  }
  getTopics()
    
  }, []);


  console.log(topics)

  const content = <div className={styles.topics}>
    {topics.map((product) => {
      // topic_id: 1, topic_name: "ethereum", total: 13, solved: 0
      return <Topic topic={product.topic_name} id={product.topic_id} done={product.solved} total={product.total} key={product.topic_id} />
    })}
  </div>

  return (
    <div className={styles.root}>
      <Header>Topics</Header>
      {content}
    </div>

  );
}

export default Challenges;
