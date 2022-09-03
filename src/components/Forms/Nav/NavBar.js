import React from 'react'
import { Link } from 'react-router-dom'
import ButtonArrow from '../../Button/ButtonArrow'

import './NavBar.css'

const NavBar = () => {
  return (
    <div className='nav'>
      <ButtonArrow title='<' />
      <Link to='' className='employee-info'>თანამშრომლის ინფო</Link>
      <Link to='' className='laptop-info'>ლეპტოპის მახასიათებლები</Link>
      </div>
  )
}

export default NavBar