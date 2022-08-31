import React from 'react'
import Input from '../../SimpleInput/Input'
import PersonInputs from './PersonInputs'

import './Employee.css'

const Employee = () => {
  return (
    <form className='form'>
      <PersonInputs />
      <WorkInputs />
      <div className='contact'>
        <Input />
        <Input />
      </div>
    </form>
  )
}

export default Employee;