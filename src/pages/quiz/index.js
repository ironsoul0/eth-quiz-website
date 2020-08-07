import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "../../components/Header";
import styles from "./Quiz.module.css";
import Question from "../../components/Question";
import axios from 'axios'



class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            payload: {},
            answers: [],
            questions : {},
            redirect: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    // sendToBack(){
    //     return {"points": 6,"total":10,"answers":[{
    //         "id": 1,
    //         "question": "How are you?",
    //         "correct_answer": "awful",
    //         "input": "not bad",
    //         "correct":false
    //       },
    //       {
    //         "id": 2,
    //         "question": "How are you?&",
    //         "correct_answer": "awful",
    //         "input": "not bad",
    //         "correct":true
    //       }, {
    //         "id": 3,
    //         "question": "How are you?",
    //         "correct_answer": "awful",
    //         "input": "not bad",
    //         "correct":false
    //       }, {
    //         "id": 4,
    //         "question": "How are you?",
    //         "correct_answer": "awful",
    //         "input": "not bad",
    //         "correct":false
    //       }
    //       ]
    //     }
    // }

    handleAnswer = (id, answer) => {
        this.setState({
            answers: [...this.state.answers, { "id": id, "answer": answer }]
        })
    }

    async handleSubmit(){
        this.setState({
            payload: {
                topic: this.props.topic,
                answers: this.state.answers
            }
        })
        this.setState({
            questions : await axios.post('http://localhost:8000/check-quiz', this.state.payload),
            // questions: this.sendToBack(),
            redirect: true
        }) 

    }
    

    render() {
        if (this.state.redirect) {
            return <Redirect to={{
              pathname: "results",
              state: {
                topic: this.props.topic,
                questions: this.state.questions
              }
            }} /> //PASS topic and questions from here
          }

        return (
            <div className={styles.root}>
                <Header>{this.props.location.state.topic}</Header>
                {this.props.location.state.questions.map((value, index) => (
                    <Question onChildClick={this.handleAnswer} question={value.question} hint={value.hint} id={index} />
                ))}
                <button className={styles.buttonSubmit} onClick={this.handleSubmit}>Submit</button>
            </div>

        )
    }
}

export default Quiz;
