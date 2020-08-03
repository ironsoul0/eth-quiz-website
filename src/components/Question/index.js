import React from "react";
import styles from "./Question.module.css";



class Question extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            question: props.question,
            answer: "",
            showQuestion: false
        }

        this.handleChange = this.handleChange.bind(this);
        
    }

    disableOnclick = (e) =>{
        e.target.disabled = true
      }
    
    showQuestion = () => {
        const isVisible = this.state.showQuestion;
        this.setState({
            showQuestion: !isVisible
        });
    }
    handleChange(event) {
        this.setState({answer: event.target.value});
      }

    disableOnclick = (e) =>{
        alert(this.state.answer)
        e.target.disabled = true
    }
    render(){
        let question = null;
        console.log(this.state.showQuestion)
        if(this.state.showQuestion) {

        console.log(this.state.showQuestion)
            question = (
                
                    <div className={styles.questionCard}>

                        <p className={styles.question}>{this.state.question}</p>
                        <input type="text" className={styles.input} value={this.state.answer} onChange={this.handleChange} placeholder="Type the answer here"></input>
                        <button className={styles.buttonSubmit} onClick={(e)=>this.disableOnclick(e)}>Submit</button>
                        
                    </div>
            );
        }
        return (
            <div className={styles.question}>
              <button className={styles.buttonQuestion} onClick={this.showQuestion}>Question #</button>
                {question}
            </div>
          );
    }
}

export default Question;
