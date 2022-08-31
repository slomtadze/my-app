import React, { Fragment } from 'react'
import './Input.css'

const Input = (props) => {
  return (
    <Fragment>    
      <div className={props.style}>
        <label htmlFor={props.id}>{props.label}</label>
        <input 
          type={props.type}
          placeholder={props.placeholder} 
          id={props.id}
          onChange={props.onChange}
          onBlur={props.onBlur} 
          value={props.value}
        />
        <span>{props.span}</span>
      </div>          
    </Fragment>
  )
}

export default Input