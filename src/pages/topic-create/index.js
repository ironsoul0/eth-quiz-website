import React, { useState } from "react";
import styles from "./TopicCreate.module.css";
import Header from "../../components/Header";
import { v4 } from "uuid";
import axios from "axios";
import { Redirect } from "react-router-dom";

function TopicCreate() {
  const [questions, setQuestions] = useState([]);
  const [topicName, setTopicName] = useState("");
  const [error, setError] = useState("");

  const [authorized, setAuthorized] = useState(true);

  React.useEffect(() => {
    axios
      .get("/quiz/is-supervisor")
      .then((response) => {
        setAuthorized(response.data.is_supervisor);
      })
      .catch(() => setAuthorized(false));
  }, []);

  const handleAddQuestion = () => {
    const randomId = v4();

    setQuestions([
      ...questions,
      {
        question: "",
        answer: "",
        hint: "",
        id: randomId,
      },
    ]);
  };

  const removeQuestion = (id) => {
    setQuestions(questions.filter((x) => x.id !== id));
  };

  const handleChange = (id, newValue, key) => {
    const copy = [...questions];
    const target = copy.filter((x) => x.id === id)[0];

    target[key] = newValue;

    setQuestions(copy);
  };

  const handleSubmit = async () => {
    if (topicName === "") {
      return setError("Topic name should not be empty");
    }

    const exists = questions.some(
      (x) =>
        x.question.length === 0 || x.answer.length === 0 || x.hint.length === 0
    );

    if (exists) {
      return setError("All fields should be non-empty");
    }

    const response = await axios.post("/quiz/create-topic", {
      topic: topicName,
    });
    const topicId = response.data.id;

    const requests = questions.map(({ question, answer, hint }) => {
      return axios.post("/quiz/create-question", {
        question,
        answer,
        hint,
        topic: topicId,
      });
    });

    await axios.all(requests);
    setQuestions([]);
    setError("Topic was created");
    setTopicName("");
  };

  if (!authorized) {
    return <Redirect to="/" />;
  }

  return (
    <div className={styles.root}>
      <Header>Create Topic</Header>
      <h2>Topic name</h2>
      <input
        name="topicName"
        type="text"
        value={topicName}
        onChange={(e) => setTopicName(e.target.value)}
      />
      <br />
      {questions.map((q, index) => {
        return (
          <div key={q.id} className={styles.questionBlock}>
            <h3>Question {index + 1}</h3>
            <input
              type="text"
              value={q.question}
              onChange={(e) => handleChange(q.id, e.target.value, "question")}
            />
            <h3>Answer {index + 1}</h3>
            <input
              type="text"
              value={q.answer}
              onChange={(e) => handleChange(q.id, e.target.value, "answer")}
            />
            <h3>Hint {index + 1}</h3>
            <input
              type="text"
              value={q.hint}
              onChange={(e) => handleChange(q.id, e.target.value, "hint")}
            />
            <button onClick={() => removeQuestion(q.id)}>Remove</button>
          </div>
        );
      })}
      <button onClick={handleAddQuestion} className={styles.addQuestion}>
        Add question
      </button>
      <button onClick={handleSubmit}>Submit</button>
      {error && <p>{error}</p>}
      {/* <input type="submit" /> */}
    </div>
  );
}

export default TopicCreate;
