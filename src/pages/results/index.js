import React from "react";
import {Redirect } from "react-router-dom";

import Header from "../../components/Header";
import styles from "./Results.module.css";
import Answer from "../../components/Answer";


  

class Results extends React.Component {
    constructor(props){
      super(props);
      this.state={
        redirect:false
      }
      this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(){
      this.setState({
        redirect:true
      })
    }

    render() {
        const res = this.props.location.state.questions;
        
        if(this.state.redirect){
          return <Redirect to={{pathname:"challenges"}}/>
        }
        return (
            <div className={styles.root}>
                <Header>{this.props.location.topic}</Header>
                <p className={styles.stat}>Points: {res.points}/{res.total}</p>
                {res.answers.map((value, index) => (
                    <Answer answer={value.correct_answer} id={index} key={index} userInput={value.input} correct={value.correct} correctAnswer={value.correct_answer} question={value.question}  id={index} />
                ))}
                
                <button className={styles.buttonSubmit} onClick={this.handleSubmit}>Back to topics</button>
            </div>

        )
    }
}

export default Results;
