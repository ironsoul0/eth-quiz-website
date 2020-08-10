import React, { useState } from "react";
import styles from "./Topic.module.css";
import axios from 'axios'

import { useHistory, Redirect, Link } from "react-router-dom";




class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      questions: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  style = {
    backgroundImage: "url(" + this.props.url + ")",
    width: "280px",
    height: "173px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  };




  async requestToBackend() {
    return axios.get('/quiz/generate-quiz',
      {
        params: {
          topic: this.props.topic
        }
      })
    // return {
    //   "quiz": [{
    //     "id": 1,
    //     "question": "How are you?",
    //     "topic": "Privacy",
    //     "hint": "you are bad"
    //   },
    //   {
    //     "id": 2,
    //     "question": "How are you?",
    //     "topic": "Privacy",
    //     "hint": "you are bad"
    //   }, {
    //     "id": 3,
    //     "question": "How are you?",
    //     "topic": "Privacy",
    //     "hint": "you are bad"
    //   }, {
    //     "id": 4,
    //     "question": "How are you?",
    //     "topic": "Privacy",
    //     "hint": "you are bad"
    //   }
    //   ]
    // }
  }

  
  handleClick(){
    this.setState({
      redirect: true
    })
  }
  async componentDidMount(){
    const res = await this.requestToBackend();
    this.setState({
      questions: res.data.questions
    })
  }


  render() {
    if (this.state.redirect) {
      return <Redirect to={{
        pathname: "quiz",
        state: {
          topic: this.props.topic,
          questions: this.state.questions
        }
      }} />
    }
    return (
      <button className={styles.card} onClick={this.handleClick}>
        <div style={this.style}></div>
        <h3 className={styles.name}>{this.props.topic}</h3>
        <p className={styles.stat}>
          {this.props.done}/{this.props.total}
        </p>
      </button>
    )
  }
}

export default Topic;
