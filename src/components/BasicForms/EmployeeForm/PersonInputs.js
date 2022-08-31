import React from 'react'
import Input from '../../SimpleInput/Input'
import './PersonInputs.css'

const PersonInputs = () => {
  return (
    <div className='personal'>    
        <Input
          style='simple-input' 
          label='სახელი'
          type='text'
          span='მინიმუმ 2 სიმბოლო, ქართული ასოები'
          placeholder='გრიშა'
        />
        <Input 
          style='simple-input'
          label='გვარი'
          type='text'
          span='მინიმუმ 2 სიმბოლო, ქართული ასოები'
          placeholder='ბაგრატიონი'
            />
    </div>
  )
}

export default PersonInputs