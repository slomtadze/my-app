import React, { Fragment } from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styles[props.styles]}>
      <label htmlFor={props.id}>{props.label}</label>
      <input type={props.type} id={props.id} />
      <span>{props.title}</span>
    </div>
  );
};

export default Input;
