import React, { useState } from "react";
import styles from "./Topic.module.css";


function Topic(props) {
  var style = {
    backgroundImage: "url(" + props.url + ")",
    width: "280px",
    height: "173px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  };

  return (
    <div className={styles.card}>
      <div style={style}></div>
      <h3 className={styles.name}>{props.topic}</h3>
      <p className={styles.stat}>
        {props.done}/{props.total}
      </p>
    </div>
  );
}

export default Topic;
