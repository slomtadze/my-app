import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Employee from './../EmployeeForm/Employee'
import NavBar from '../Nav/NavBar'

import './MainForm.css'

const MainForm = () => {
  return (
    <div className='basic-form'>
      <NavBar />        
      <Employee />
    </div>
  )
}

export default MainForm