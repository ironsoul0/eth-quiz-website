import React, { useState } from "react";
import styles from "./Topic.module.css";
import axios from 'axios'

import { useHistory, Redirect  } from "react-router-dom";



function requestToBackend() {
  return [{
    "id" : 1,
    "question": "How are you?",
    "topic": "Privacy",
    "hint":"you are bad"
  },
  {
    "id" : 2,
    "question": "How are you?",
    "topic": "Privacy",
    "hint":"you are bad"
  },{
    "id" : 3,
    "question": "How are you?",
    "topic": "Privacy",
    "hint":"you are bad"
  },{
    "id" : 4,
    "question": "How are you?",
    "topic": "Privacy",
    "hint":"you are bad"
  }
  ]
}




class Topic extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false
    }
    this.handleClick=this.handleClick.bind(this);
  }

  style = {
    backgroundImage: "url(" + this.props.url + ")",
    width: "280px",
    height: "173px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  };

  handleClick(e){
    // axios.get('https://api.github.com/users/maecapozzi')
    // .then(response => console.log(response))
    const res = requestToBackend;
    this.setState({
      redirect: true
    })

  }
  
  render(){
    if (this.state.redirect) {
      return <Redirect to='quiz'/>
    }
  return (
    <button className={styles.card} onClick={this.handleClick} > 
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
