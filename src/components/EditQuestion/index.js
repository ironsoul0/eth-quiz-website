import React from "react";
import styles from "./EditQuestion.module.css";
import axios from "axios";


class EditQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode:props.mode,
            showQuestion: true,
            question: props.question,
            answer: props.answer,
            hint: props.hint,
        }

        this.handleQuestionChange = this.handleQuestionChange.bind(this);
        this.handleAnswerChange = this.handleAnswerChange.bind(this);
        this.handleHintChange = this.handleHintChange.bind(this);
    }


    handleQuestionChange(event) {
        this.setState({ question: event.target.value });
    }

    handleHintChange(event) {
        this.setState({ hint: event.target.value });
    }

    handleAnswerChange(event) {
        this.setState({ answer: event.target.value });
    }

    showQuestion = () => {
        const isVisible = this.state.showQuestion;
        this.setState({
            showQuestion: !isVisible
        });
    }

    handleQuestionSubmit = () => {
        if (this.state.answer===""){
            this.setState({answer : this.props.answer})
        }
        if (this.state.question===""){
            this.setState({question : this.props.question})
        }
        if (this.state.hint===""){
            this.setState({hint : this.props.hint})
        }
        axios.post('quiz/update-question',{
            id:this.props.id,
            question: this.state.question,
            answer: this.state.answer,
            hint: this.state.hint
        }).then((response) => {
            if (response.status)
        })

        this.props.setMode('read');
        this.props.setReload(true);
    }

    render() {
        let question = null;
        let style = null;

        if (this.state.showQuestion) {
            if (this.props.mode === 'read') {
                question = (
                    <div className={styles.questionCard}>
                        <h3 >Question: </h3>
                        <p className={styles.question}>{this.props.question}</p>
                        <h3 className={styles.header}>Hint: </h3>
                        <p className={styles.question}>{this.props.hint}</p>
                        <h3 className={styles.header}>Answer: </h3>
                        <p className={styles.question}>{this.props.answer}</p>
                    </div>
                );
            } else if (this.props.mode === 'update') {
                question = (
                    <div className={styles.questionCard}>
                        <h3 className={styles.header}>Question: </h3>
                        <input type="text" className={styles.input} value={this.state.question} onChange={this.handleQuestionChange}></input>
                        <h3 className={styles.header}>Hint: </h3>
                        <input type="text" className={styles.input} value={this.state.hint} onChange={this.handleHintChange}></input>
                        <h3 className={styles.header}>Answer: </h3>
                        <input type="text" className={styles.input} value={this.state.answer} onChange={this.handleAnswerChange}></input>

                        <button className={styles.buttonSubmit} onClick={(e) => this.handleQuestionSubmit(e)}>Submit</button>

                    </div>
                );
            }
        } else {
            style = {
                borderRadius: '10px 10px 10px 10px',
            }
        }
        return (
            <div className={styles.root}>
                <button className={styles.buttonQuestion} style={style} onClick={this.showQuestion}>Question {this.props.index+1}</button>
                {question}

            </div>
        );
    }
}

export default EditQuestion;
