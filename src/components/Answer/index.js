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
        let style = null;
        let correctStyle=null
        if(this.state.correct){
            correctStyle={
                boxShadow: 'inset 0px -6px 0px 0px #8eff00',
            }
        }
        else{
            correctStyle={
                boxShadow: 'inset 0px -6px 0px 0px red',
            }
        }
        if(this.state.showQuestion) {

            question = (
                    <div className={styles.questionCard} style={correctStyle}>
                        <p className={styles.question}>{this.state.question}</p>
                        <p className={styles.question}>Correct answer: </p>
                        <p className={styles.question}>{this.state.correctAnswer}</p>
                        <p className={styles.question}>Your answer: </p>
                        <p className={styles.question}>{this.state.userInput}</p>
                    </div>
            );
        }else{
            style = {
                borderRadius: '10px 10px 10px 10px',
            }
        }
        
        return (
            <div className={styles.root}>
              <button className={styles.buttonQuestion} style={style} onClick={this.showQuestion}>Question {this.props.id+1}</button>
                {question}
            </div>
          );
    }
}

export default Answer;
