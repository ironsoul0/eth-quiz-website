import React from "react";
import styles from "./CreateQuestion.module.css";



class CreateQuestion extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            question: "",
            answer: "",
            hint:"",
            topic:""
        }

        this.newQuestion = this.newQuestion.bind(this);
        this.newAnswer = this.newAnswer.bind(this);
        this.newHint = this.newHint.bind(this);
        this.newTopic = this.newTopic.bind(this);
        
    }

    handleClick(){};
    
    newQuestion(event) {
        this.setState({question: event.target.value});
    }

    newAnswer(event) {
        this.setState({answer: event.target.value});
    }
    newHint(event) {
        this.setState({hint: event.target.value});
    }

    newTopic(event) {
        this.setState({topic: event.target.value});
    }

    render(){
        
        return (
            <div className={styles.root}>
              <button className={styles.buttonQuestion} >New Question</button>
              <div className={styles.questionCard}>
              <input type="text" className={styles.input} value={this.state.question} onChange={this.newQuestion} placeholder="Type the question here"></input>
            
            <input type="text" className={styles.input} value={this.state.answer} onChange={this.newAnswer} placeholder="The answer goes here"></input>
            
            <input type="text" className={styles.input} value={this.state.hint} onChange={this.newHint} placeholder="What about some hint? :)"></input>
            <input type="text" className={styles.input} value={this.state.topic} onChange={this.newTopic} placeholder="Topic"></input>
            <button className={styles.buttonSubmit} onClick={this.handleClick}>Add</button>
                </div>  
            </div>
          );
    }
}

export default CreateQuestion;