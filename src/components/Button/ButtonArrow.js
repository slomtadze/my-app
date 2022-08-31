import React from 'react'

import './ButtonArrow.css'

const ButtonArrow = (props) => {
  return (
    <button className='button-arrow'>{props.title}</button>
  )
}

export default ButtonArrow