import React from "react";
import styles from "../Question/Question.module.css";

import { checkENSName } from '../../utils/checkENSname'



class Quest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: "",
            result: null,
            showQuestion: true
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ answer: event.target.value });
    }


    showQuestion = () => {
        const isVisible = this.state.showQuestion;
        this.setState({
            showQuestion: !isVisible
        });
    }


    disableOnclick = async (e) => {

        // e.target.disabled = true
        console.log(this.state.answer);
        this.setState({
            result: await checkENSName(this.state.answer)
        })

    }
    render() {
        let question = null;
        let styleButton = null;
        let styleBox = null;
        let message = null;
        if (this.state.result) {

            styleBox = {
                boxShadow: 'inset 0px -6px 0px 0px #8eff00',
            }
            message =(
                <p className={styles.question} style={{color:'\#8eff00',marginTop:'10px'}}>Correct!</p>
            )

        }
        else if(this.state.result===false) {
            styleBox = {
                boxShadow: 'inset 0px -6px 0px 0px red',
            }

            message =(
                <p className={styles.question} style={{color:'red',marginTop:'10px'}}>Your name was not validated ;(</p>
            )
        }

        if (this.state.showQuestion) {

            question = (
                <div className={styles.questionCard} style={styleBox}>

                    <p className={styles.question}>🧙‍♂️ Register an ENS name (.eth address) and point it at your 🦊 MetaMask address</p>

                    <p className={styles.question}>Argent let's you <a href="http://yourname.argent.xyz">register</a> [yourname.argent.xyz]</p>
                    <p className={styles.question}>✅ Paste your .eth or .xyz ENS name</p>
                    <input type="text" className={styles.input} value={this.state.answer} onChange={this.handleChange} placeholder="Type your ENS name here"></input>
                    <button className={styles.buttonSubmit} onClick={(e) => this.disableOnclick(e)}>Submit</button>
                    {message}
                </div>
            );
        } else {
            styleButton = {
                borderRadius: '10px 10px 10px 10px',
            }
        }
        return (
            <div className={styles.root}>
                <button className={styles.buttonQuestion} style={styleButton} onClick={this.showQuestion}>Quest: ENS Name</button>
                {question}
            </div>
        );
    }
}

export default Quest;
