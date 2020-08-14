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
            questions: {},
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

    handleSubmit() {

        const answered = {}

        this.state.answers.forEach(answer => {
            answered[answer.id] = answer.answer
        })

        this.props.location.state.questions.forEach(question => {
            if (answered[question.id] === undefined) {
                answered[question.id] = ""
            }
        })

        const temp_answers = []

        for (const property in answered) {

            temp_answers.push({
                id: property,
                answer: answered[property]
            })
        }


        const payload = {
            answers: temp_answers
        }

        axios.put('/quiz/check-quiz', payload).then(res => {
            this.setState({
                questions: res.data,
                redirect: true
            })
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
                    <Question onChildClick={this.handleAnswer} question={value.question} hint={value.hint} id={value.id} key={value.id} index={index} />
                ))}
                <button className={styles.buttonSubmit} onClick={this.handleSubmit}>Submit</button>
            </div>

        )
    }
}

export default Quiz;
