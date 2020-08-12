import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import styles from "./Admin.module.css";

function Admin() {
  const [authorized, setAuthorized] = useState(true);
  const [topics, setTopics] = useState(null);

  React.useEffect(() => {
    axios
      .get("/quiz/is-supervisor")
      .then((response) => {
        setAuthorized(response.data.is_supervisor);
      })
      .catch(() => setAuthorized(false));

    axios.get("/quiz/get-user-scores").then(({ data }) => {
      setTopics(data);
    });
  }, []);

  const handleDeleteTopic = (id) => {
    const ask = window.confirm("Are you sure?");

    if (!ask) {
      return;
    }

    axios
      .post("/quiz/delete-topic", {
        id,
      })
      .then(() => {
        setTopics(topics.filter((topic) => topic.topic_id !== id));
      })
      .catch(() => {
        console.log("Error deleting");
      });
  };

  if (!authorized) {
    return <Redirect to="/" />;
  }

  if (!topics) {
    return <p>Loading..</p>;
  }

  return (
    <div>
      <h2 style={{ marginBottom: "30px" }}>All topics</h2>
      {topics.map((topic) => {
        return (
          <div key={topic.topic_id} className={styles.card}>
            <h4>{topic.topic_name}</h4>
            <button
              onClick={() => handleDeleteTopic(topic.topic_id)}
              className={styles.deleteButton}
            >
              Delete topic
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Admin;
