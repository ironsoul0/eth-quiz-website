import React from "react";
import styles from "./Question.module.css";



class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            question: props.question,
            hint: props.hint,
            answer: "",
            showQuestion: true,
            showHint: false
        }

        this.handleChange = this.handleChange.bind(this);
    }

    showQuestion = () => {
        const isVisible = this.state.showQuestion;
        this.setState({
            showQuestion: !isVisible
        });
    }

    showHint = () => {
        const isVisible = this.state.showHint;
        this.setState({
            showHint: !isVisible
        });
    }

    handleChange(event) {
        this.setState({ answer: event.target.value });
    }

    disableOnclick = (e) => {
        this.props.onChildClick(this.state.id, this.state.answer);
        e.target.disabled = true
    }
    render() {
        let question = null;
        let style = null;
        let hint = null;
        if (this.state.showHint) {
            hint = (

                <p className={styles.question}>{this.state.hint}</p>
            )
        }

        if (this.state.showQuestion) {
            question = (
                <div className={styles.questionCard}>

                    <p className={styles.question}>{this.state.question}</p>
                    <input type="text" className={styles.input} value={this.state.answer} onChange={this.handleChange} placeholder="Type the answer here"></input>
                    <button className={styles.buttonSubmit} onClick={(e) => this.disableOnclick(e)}>Submit</button>
                    <button className={styles.buttonHint} onClick={this.showHint}>Click me to see a hint!</button>
                    {hint}
                </div>
            );
        }else{
            style = {
                borderRadius: '10px 10px 10px 10px',
            }
        }
        return (
            <div className={styles.root}>
                <button className={styles.buttonQuestion} style={style} onClick={this.showQuestion}>Question {this.state.id}</button>
                {question}
            </div>
        );
    }
}

export default Question;
