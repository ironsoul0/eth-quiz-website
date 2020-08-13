import React, { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./TopicManage.module.css";

function TopicManage() {
  const [authorized, setAuthorized] = useState(true);
  const [questions, setQuestions] = useState(null);
  const { slug } = useParams();

  React.useEffect(() => {
    axios
      .get("/quiz/is-supervisor")
      .then((response) => {
        setAuthorized(response.data.is_supervisor);
      })
      .catch(() => setAuthorized(false));

    axios.get("/quiz/get-user-scores").then((response) => {
      const target = response.data.filter((x) => x.topic_id === slug);
      setQuestions(target[0]);

      console.log(questions);
    });
  }, []);

  if (!authorized) {
    return <Redirect to="/" />;
  }

  if (!questions) {
    return <p>Loading..</p>;
  }

  return (
    <div className={styles.root}>
      Now browsing {slug}
      <input />
    </div>
  );
}

export default TopicManage;
