import React from "react";
import styles from "./Answer.module.css";


class Answer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            question: props.question,
            correctAnswer: props.correctAnswer,
            userInput: props.userInput,
            correct: props.correct,
            showQuestion:false
        }        
    }

    showQuestion = () => {
        const isVisible = this.state.showQuestion;
        this.setState({
            showQuestion: !isVisible
        });
    }


    render(){
        let question = null;
        if(this.state.showQuestion) {

            question = (
                    <div className={styles.questionCard}>
                        <p className={styles.question}>{this.state.question}</p>
                        <p className={styles.question}>Correct answer: </p>
                        <p className={styles.question}>{this.state.correctAnswer}</p>
                        <p className={styles.question}>Your answer: </p>
                        <p className={styles.question}>{this.state.userInput}</p>
                    </div>
            );
        }
        return (
            <div className={styles.root}>
              <button className={styles.buttonQuestion} onClick={this.showQuestion}>Question #</button>
                {question}
            </div>
          );
    }
}

export default Answer;
