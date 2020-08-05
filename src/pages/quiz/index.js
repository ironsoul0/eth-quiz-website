import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "../../components/Header";
import styles from "./Quiz.module.css";
import Question from "../../components/Question";

function requestToBackend() {
    return [{
        "id": 1,
        "question": "How are you?",
        "topic": "Privacy",
        "hint": "bad"
    },
    {
        "id": 2,
        "question": "How are you?",
        "topic": "Privacy",
        "hint": "bad"
    },
    {
        "id": 3,
        "question": "How are you?",
        "topic": "Privacy",
        "hint": "bad"
    },
    {
        "id": 4,
        "question": "How are you?",
        "topic": "Privacy",
        "hint": "bad"
    },
    {
        "id": 5,
        "question": "How are you?",
        "topic": "Privacy",
        "hint": "bad"
    }]
}

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: []
        };
    }
    //topic
    handleAnswer = (id, answer) => {
        this.setState({
            answers: [...this.state.answers, { "id": id, "answer": answer }]
        })

    }

    res = requestToBackend();

    render() {

        console.log(this.state.answers)
        return (
            <div className={styles.root}>
                <Header>{this.props.topic}</Header>
                {this.res.map((value, index) => (
                    <Question onChildClick={this.handleAnswer} question={value.question} hint={value.hint} id={index} />
                ))}
                <button className={styles.buttonSubmit}>Submit</button>
            </div>

        )
    }
}

export default Quiz;
