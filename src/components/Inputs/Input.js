import React, { Fragment } from 'react'
import "./Input.css";

const Input = (props) => {
  return (
    <div className={props.styles}>
      <label htmlFor={props.id}>{props.label}</label>
      <input type={props.type} id={props.id} />
      <span>{props.title}</span>
    </div>
  );
};

export default Input;