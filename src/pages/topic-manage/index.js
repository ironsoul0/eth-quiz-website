import React, { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./TopicManage.module.css";
import Header from "../../components/Header";
import EditQuestion from "../../components/EditQuestion";

function TopicManage() {
  const [authorized, setAuthorized] = useState(true);
  const [questions, setQuestions] = useState(null);
  const [mode, setMode] = useState('read');
  const [reload, setReload] = useState(null);
  const { slug } = useParams();

  React.useEffect(() => {
    axios
      .get("/quiz/is-supervisor")
      .then((response) => {
        setAuthorized(response.data.is_supervisor);
      })
      .catch(() => setAuthorized(false));
    axios.get('/quiz/get-questions-supervisor',
      {
        params: {
          topic: slug
        }
      }).then((response) => {
        setQuestions(response.data.questions);
      });
  }, []);

  if (!authorized) {
    return <Redirect to="/" />;
  }
  const handleDeleteQuestion = (id) => {

    const ask = window.confirm("Are you sure?");

    if (!ask) {
      return;
    }

    axios
      .post("/quiz/delete-question", {
        id,
      })
      .then(() => {
        setQuestions(questions.filter((question) => question.id !== id));
      })
      .catch(() => {
        console.log("Error deleting");
      });
  };


  const handleUpdateQuestion = () => {
    console.log(mode)
    setMode('update')

  }

  if (!questions) {
    return <p>Loading..</p>;
  }
  if (reload) {
    window.location.reload()
    setReload(null)
  }
  return (
    <div className={styles.root}>
      <Header>{slug}</Header>
      {questions.map((question, index) => (
        <div>
          <EditQuestion setReload={setReload} setMode={setMode} mode={mode} question={question.question} hint={question.hint} id={question.id} key={question.id} index={index}></EditQuestion>

          <button
            onClick={() => handleDeleteQuestion(question.id)}
            className={styles.deleteButton}
          >
            Delete question
      </button>
          <button className={styles.deleteButton}
            onClick={() => handleUpdateQuestion()}>Edit question</button>
        </div>))}
    </div>
  );
}

export default TopicManage;
