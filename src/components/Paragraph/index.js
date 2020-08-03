import React, { useState } from "react";
import styles from "./Paragraph.module.css";

function Paragraph(props) {
  
  return (
    <div>
        <h2 className={styles.title}>{props.subtitle}</h2>
        <p className={styles.paragraph}>{props.content}</p>

    </div>
  );
}

export default Paragraph;
