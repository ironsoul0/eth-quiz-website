import React, { useState } from "react";
import styles from "./Library.module.css";
import Paragraph from "../Paragraph";

function Library(props) {
  
  return (
    <div>
        <h1 className={styles.title}>Knowledge Base</h1>
        <Paragraph subtitle="I am super new to Ethereum. Where do I go?" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quae voluptatum repudiandae ipsa suscipit molestias quia a. At deleniti quasi architecto assumenda doloribus mollitia vel quam tenetur tempore ipsam? Ex."/>
        <Paragraph subtitle="What are some good resources to learn DApp dev?" content="1. Visti Dropbox - Intro to development on Ethereum for comprehensive guide for
            newbies that will help you to setup your dev environment and local blochain." />
    </div>
  );
}

export default Library;